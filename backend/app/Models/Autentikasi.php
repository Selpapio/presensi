<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Autentikasi extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\AutentikasiFactory> */
    use HasFactory, Notifiable, HasApiTokens;

    protected $fillable = [
        'nama',
        'username',
        'password'
    ];

    protected $hidden = [
        'password'
    ];
}
