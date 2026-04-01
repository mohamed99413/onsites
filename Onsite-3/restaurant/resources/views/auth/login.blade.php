<x-guest-layout>
    <style>
        body {
            background: linear-gradient(135deg, #4facfe, #00f2fe);
            min-height: 100vh;
        }

        .login-container {
            min-height: 100vh;
        }

        .login-card {
            background: #ffffff;
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            width: 100%;
        }

        .login-title {
            font-weight: 700;
        }

        .form-control {
            border-radius: 12px;
            padding: 12px;
        }

        .btn-login {
            border-radius: 12px;
            padding: 10px;
            font-weight: 600;
        }

        .input-group-text {
            border-radius: 0 12px 12px 0;
            cursor: pointer;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .login-card {
                padding: 20px;
            }
        }
    </style>

    <div class="container login-container d-flex justify-content-center align-items-center">
        <div class="col-12 col-sm-10 col-md-6 col-lg-4">

            <div class="login-card">

                <!-- Title -->
                <div class="text-center mb-4">
                    <h3 class="login-title">Welcome Back 👋</h3>
                    <p class="text-muted small">Login to continue</p>
                </div>

                <!-- Session Status -->
                <x-auth-session-status class="mb-3 text-success" :status="session('status')" />

                <form method="POST" action="{{ route('login') }}">
                    @csrf

                    <!-- Email -->
                    <div class="mb-3">
                        <input type="email" name="email"
                               class="form-control"
                               placeholder="Email Address"
                               value="{{ old('email') }}" required autofocus>
                        <x-input-error :messages="$errors->get('email')" class="text-danger small mt-1" />
                    </div>

                    <!-- Password -->
                    <div class="mb-3">
                        <div class="input-group">
                            <input type="password" name="password" id="password"
                                   class="form-control"
                                   placeholder="Password" required>

                            <span class="input-group-text" onclick="togglePassword()">
                                <i class="bi bi-eye" id="eyeIcon"></i>
                            </span>
                        </div>
                        <x-input-error :messages="$errors->get('password')" class="text-danger small mt-1" />
                    </div>

                    <!-- Remember + Forgot -->
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="remember">
                            <label class="form-check-label small">Remember</label>
                        </div>

                        @if (Route::has('password.request'))
                            <a href="{{ route('password.request') }}" class="small text-decoration-none">
                                Forgot?
                            </a>
                        @endif
                    </div>

                    <!-- Button -->
                    <button type="submit" class="btn btn-primary w-100 btn-login">
                        Login
                    </button>

                    <!-- Register -->
                    <div class="text-center mt-3">
                        <small>
                            Don't have an account?
                            <a href="{{ route('register') }}">Register</a>
                        </small>
                    </div>

                </form>
            </div>

        </div>
    </div>

    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">

    <!-- Script -->
    <script>
        function togglePassword() {
            const password = document.getElementById('password');
            const icon = document.getElementById('eyeIcon');

            if (password.type === "password") {
                password.type = "text";
                icon.classList.remove("bi-eye");
                icon.classList.add("bi-eye-slash");
            } else {
                password.type = "password";
                icon.classList.remove("bi-eye-slash");
                icon.classList.add("bi-eye");
            }
        }
    </script>
</x-guest-layout>