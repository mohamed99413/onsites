@extends('layouts.app')

@section('content')
<div class="container-fluid">

    <!-- Title -->
    <div class="mb-4">
        <h2 class="fw-bold">Admin Dashboard</h2>
        <p class="text-muted">Welcome back 👋 Manage your restaurant easily</p>
    </div>

    <!-- Stats Cards -->
    <div class="row g-4">

        <!-- Categories -->
        <div class="col-md-6 col-lg-4">
            <div class="card border-0 shadow-lg rounded-4 p-4 text-center bg-light">
                <div class="mb-3">
                    <i class="fa-solid fa-layer-group fa-2x text-primary"></i>
                </div>
                <h3 class="fw-bold text-primary">
                    {{ \App\Models\Category::count() }}
                </h3>
                <p class="text-muted mb-0">Total Categories</p>
            </div>
        </div>

        <!-- Meals -->
        <div class="col-md-6 col-lg-4">
            <div class="card border-0 shadow-lg rounded-4 p-4 text-center bg-light">
                <div class="mb-3">
                    <i class="fa-solid fa-utensils fa-2x text-success"></i>
                </div>
                <h3 class="fw-bold text-success">
                    {{ \App\Models\Meal::count() }}
                </h3>
                <p class="text-muted mb-0">Total Meals</p>
            </div>
        </div>

    </div>

</div>
@endsection