<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'test@example.com'],
            ['name' => 'Test User','email' => 'test@example.com',
            'password' => '123456#A']
        );

        User::firstOrCreate(
            ['email' => 'test2@example.com'],
            ['name' => 'Test User 2','email' => 'test2@example.com',
            'password' => '123456#A']
        );

        User::firstOrCreate(
            ['email' => 'test3@example.com'],
            ['name' => 'Test User 3','email' => 'test3@example.com',
            'password' => '123456#A']
        );

        User::firstOrCreate(
            ['email' => 'test4@example.com'],
            ['name' => 'Test User 4','email' => 'test4@example.com',
            'password' => '123456#A']
        );
        
        User::firstOrCreate(
            ['email' => 'test5@example.com'],
            ['name' => 'Test User 5','email' => 'test5@example.com',
            'password' => '123456#A']
        );
    }
}
