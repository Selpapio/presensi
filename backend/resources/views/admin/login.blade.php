@extends('template.layout')

@section('title', 'Login - Web Perpustakaan')

@section('main')

    <style>
        .img-logo {
            width: 82px;
            margin: 24px auto;
            display: block;
        }

        @media only screen and (max-width: 576px) {
            .login-container {
                padding: 50px 30px;
            }
        }

        @media only screen and (min-width: 576px) {
            .login-container {
                padding: 50px 120px;
            }
        }

        @media only screen and (min-width: 768px) {
            .login-container {
                padding: 50px 200px;
            }
        }

        @media only screen and (min-width: 992px) {
            .login-container {
                padding: 50px 300px;
            }
        }

        @media only screen and (min-width: 1200px) {
            .login-container {
                padding: 50px 460px;
            }
        }
    </style>
    <section class="login-container">
        <div class="card shadow-lg">
            <div class="card-header">
                <img src="{{ asset('.D:\presensi\presensi\resources\views\admin\img') }}" alt="Logo" class="img-logo">
                <h3 class="text-center">Login - Admin Presensi</h3>
            </div>
            <div class="card-body">
                <form action="login">
                    <div class="form-group">
                        <label for="username" class="form-label">Username *</label>
                        <input type="text" name="username" id="username" class="form-control"
                            placeholder="Masukkan username Anda">
                    </div>
                    <div class="form-group my-3">
                        <label for="password" class="form-label">Password *</label>
                        <input type="password" name="password" id="password" class="form-control"
                            placeholder="Masukkan password Anda">
                    </div>
                    <div class="form-group my-3">
                        <center><button class="btn btn-primary" type="submit">Login</button></center>
                    </div>
                </form>
            </div>
        </div>
    </section>
@endsection
