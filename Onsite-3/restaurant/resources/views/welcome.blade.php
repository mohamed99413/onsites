<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Restaurant Management System</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">

    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background: #f5f7fb;
        }

        /* Navbar */
        .navbar {
            background: #fff;
            box-shadow: 0 2px 15px rgba(0,0,0,0.05);
        }

        /* Hero */
        .hero {
            background: url('https://images.unsplash.com/photo-1504674900247-0877df9cc836') center/cover;
            position: relative;
            color: white;
            padding: 120px 0;
        }

        .hero::before {
            content: "";
            position: absolute;
            inset: 0;
            background: rgba(0,0,0,0.6);
        }

        .hero .container {
            position: relative;
            z-index: 2;
        }

        /* Category Buttons */
        .category-btn {
            border-radius: 50px;
            padding: 8px 20px;
        }

        /* Cards */
        .card {
            border: none;
            border-radius: 20px;
            overflow: hidden;
            transition: 0.3s;
            box-shadow: 0 10px 25px rgba(0,0,0,0.05);
        }

        .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }

        .meal-img {
            height: 220px;
            object-fit: cover;
        }

        .price-badge {
            position: absolute;
            top: 15px;
            right: 15px;
            background: #fff;
            padding: 6px 15px;
            border-radius: 20px;
            font-weight: bold;
        }

        .btn-dark {
            border-radius: 50px;
        }

        footer {
            background: #111;
        }
    </style>
</head>

<body>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg sticky-top">
    <div class="container">
        <a class="navbar-brand fw-bold" href="#">
            <i class="bi bi-egg-fried me-2 text-primary"></i>Foodies
        </a>

        <div>
            @auth
                <a href="{{ url('/dashboard') }}" class="btn btn-primary rounded-pill px-4">Dashboard</a>
            @else
                <a href="{{ route('login') }}" class="me-3 text-dark">Login</a>
            @endauth
        </div>
    </div>
</nav>

<!-- Hero -->
<header class="hero text-center">
    <div class="container">
        <h1 class="display-3 fw-bold">Taste the Best Food 🍔</h1>
        <p class="lead mb-4">Fresh meals, fast delivery, and amazing taste</p>

        <div class="d-flex justify-content-center flex-wrap gap-2">
            <a href="{{ route('home') }}" class="btn btn-{{ !isset($category) ? 'primary' : 'outline-light' }} category-btn">All</a>

            @foreach($categories as $cat)
                <a href="{{ route('category.meals', $cat->id) }}"
                   class="btn btn-{{ isset($category) && $category->id == $cat->id ? 'primary' : 'outline-light' }} category-btn">
                    {{ $cat->name }}
                </a>
            @endforeach
        </div>
    </div>
</header>

<!-- Meals -->
<main class="container my-5">
    <div class="row g-4">

        @forelse($meals as $meal)
        <div class="col-md-6 col-lg-4">
            <div class="card h-100">

                <div class="position-relative">
                    @if($meal->image)
                        <img src="{{ asset('storage/' . $meal->image) }}" class="card-img-top meal-img">
                    @else
                        <div class="bg-light d-flex align-items-center justify-content-center meal-img">
                            <i class="bi bi-image text-muted display-4"></i>
                        </div>
                    @endif

                    <span class="price-badge">${{ $meal->price }}</span>
                </div>

                <div class="card-body">
                    <h5 class="fw-bold">{{ $meal->name }}</h5>
                    <p class="text-muted small">{{ $meal->description }}</p>

                    <span class="badge bg-light text-dark">
                        {{ $meal->category->name }}
                    </span>
                </div>

                <div class="p-3">
                    <button class="btn btn-dark w-100">Order Now</button>
                </div>

            </div>
        </div>
        @empty
        <div class="text-center py-5">
            <i class="bi bi-emoji-frown display-1 text-muted"></i>
            <h3 class="mt-3">No Meals Found</h3>
        </div>
        @endforelse

    </div>
</main>

<!-- Footer -->
<footer class="text-white text-center py-4">
    <p class="mb-0">&copy; {{ date('Y') }} Foodies. All rights reserved.</p>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>