<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Mail;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
                'name'=>'required|string|max:255',
                'email'=>'required|string|email|max:255|unique:users',
                'password'=>'required|string|min:6'
            ]
        );

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => strtolower($request->email),
            'password' => Hash::make($request->password)
        ]);

        return response()->json([
            'status' => 'success',
            'message'=>'User Registered Successfully',
            'user'=>$user,
            'token' => $user->createToken('passportToken')->accessToken
        ], 200);

    }

    /* Login API */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        
        // Check if the email exists in the database
        $emailExists = User::where('email', $request->input('email'))->exists();
        
        if (!$emailExists) {
            return response()->json([
                'error' => 'Email does not exist'
            ], 404);
        }
        
        // Attempt to authenticate the user
        if (Auth::attempt($request->only('email', 'password'))) {
            $token = Auth::user()->createToken('passportToken')->accessToken;
            
            return response()->json([
                'user' => Auth::user(),
                'token' => $token
            ], 200);
        }
        
        return response()->json([
            'error' => 'Unauthorised'
        ], 401);
    }

    public function userDetails()
    {
        return response()->json(auth()->user());
    }

    /*Forgot Password */
    public function forgotpassword(Request $request)
    {
        $email = $request->email;
        $user = User::where('email', $email)->first();
        if($user){
            $password = Str::random(10);
            Mail::send([],[],function($message) use($email, $password){
                $message->to($email)
                        ->subject("Reset Password")
                        ->html("<p>Your New Password is</p><br/>".$password);
            });
            User::where('email', $email)->update(['password'=>Hash::make($password)]);
            return response()->json(['status'=>'success','message'=>'New Password send in your email']);
        }else{
            return response()->json(['status'=>'error','message'=>'User Not Found']);
        }
    }

    /* Change Password */
    public function changepassword(Request $request)
    {
        $userId = $request->userId;
        $currentPassword =  $request->cpassword;
        $newpassword = $request->npassword;

        $user = User::find($userId);
        if($user){
            if(Hash::check($currentPassword, $user->password)){
                User::where('id', $userId)->update(['password'=>Hash::make($newpassword)]);
              
                return response()->json(['status'=>'success','message'=>'Password Change Successfully']);
            }else{
                return response()->json(['status'=>'error','message'=>'Current Password Not Match']);
            }
        }else{
            return response()->json(['status'=>'error','message'=>'User Not Found']);
        }
    }
}
