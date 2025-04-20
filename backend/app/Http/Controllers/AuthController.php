<?php

namespace App\Http\Controllers;

use App\Models\Autentikasi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $user = Autentikasi::create([
            "nama" => $request->input('nama'),
            "username" => $request->input('username'),
            "password" => Hash::make($request->input("password")),
        ]);

        return response()->json([
            $user
        ]);
    }

    public function Login(Request $request)
    {
        // if (!Auth::attempt(credentials: $request->only('username', 'password'))) {
        //     return response([
        //         'msg' => 'Invalid crediantls'
        //     ], Response::HTTP_UNAUTHORIZED);
        // }
        // $user = Auth::user();

        // $token = $user->createToken('token')->plainTextToken;
        // $cookie = cookie('jwt', $token, 60 * 24);

        // return $token;
    }
    public function User(Request $request) {}
}
