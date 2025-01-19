$(document).ready(function() {
    // Smooth scrolling
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 100);
        }
    });

    // Fade in elements on scroll
    function fadeInElements() {
        $('.fade-in').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('visible');
            }
        });
    }

    $(window).on('scroll', fadeInElements);
    $(window).on('load', fadeInElements);

    // Modal content
    const featureContent = {
        artisan: `
            <h4>Artisan CLI</h4>
            <p>Artisan adalah command-line interface yang disertakan dengan Laravel. Artisan menyediakan sejumlah perintah yang membantu dalam pengembangan aplikasi, seperti membuat model, controller, migration, dan berbagai komponen lainnya. Hal ini sangat meningkatkan produktivitas developer
            seperti membuat model, controller, migration, dan berbagai komponen lainnya. Hal ini sangat meningkatkan produktivitas developer.</p>
            <h5>Perintah Umum:</h5>
            <ul>
                <li><code>php artisan make:controller</code> - Membuat controller baru</li>
                <li><code>php artisan make:model</code> - Membuat model baru</li>
                <li><code>php artisan migrate</code> - Menjalankan migrasi database</li>
                <li><code>php artisan serve</code> - Menjalankan development server</li>
            </ul>
        `,
        eloquent: `
            <h4>Eloquent ORM</h4>
            <p>Eloquent adalah Object-Relational Mapper (ORM) yang disertakan dengan Laravel. . Eloquent memungkinkan developer untuk berinteraksi dengan tabel database menggunakan Model yang elegan dan intuitif, tanpa perlu menulis query SQL secara manual.</p>
            <h5>Fitur Utama:</h5>
            <ul>
                <li>Active Record Pattern</li>
                <li>Relationship Management</li>
                <li>Query Builder</li>
                <li>Model Events</li>
            </ul>
            <pre><code>
class User extends Model {
    protected $fillable = ['name', 'email'];
    
    public function posts() {
        return $this->hasMany(Post::class);
    }
}
            </code></pre>
        `,
        blade: `
            <h4>Blade Templating Engine</h4>
            <p>Blade adalah template engine yang powerful namun simpel. Blade tidak membatasi penggunaan kode PHP plain dalam view, namun menyediakan sintaks yang lebih baik untuk tugas-tugas umum seperti perulangan, kondisional, dan inheritance template.</p>
            <h5>Fitur-fitur Blade:</h5>
            <ul>
                <li>Template Inheritance</li>
                <li>Component & Slots</li>
                <li>Directives</li>
                <li>Control Structures</li>
            </ul>
            <pre><code>
@extends('layouts.app')

@section('content')
    @foreach($users as $user)
        {{ $user->name }}
    @endforeach
@endsection
            </code></pre>
        `,
        routing: `
            <h4>Routing</h4>
            <p>Routing di Laravel memungkinkan pengembang untuk mendefinisikan URL aplikasi dengan cara yang sederhana. Pengembang dapat menggunakan metode HTTP seperti GET, POST, PUT, dan DELETE untuk mengatur rute.</p>
            <h5>Tipe-tipe Route:</h5>
            <ul>
                <li>Basic Routes</li>
                <li>Route Parameters</li>
                <li>Named Routes</li>
                <li>Route Groups</li>
            </ul>
            <pre><code>
Route::get('/user/{id}', function ($id) {
    return 'User '.$id;
});

Route::get('/posts', [PostController::class, 'index'])->name('posts.index');
            </code></pre>
        `,
        middleware: `
            <h4>Middleware</h4>
            <p>Middleware adalah lapisan yang berfungsi untuk memfilter permintaan HTTP yang masuk ke aplikasi. Dengan middleware, pengembang dapat menerapkan autentikasi, logging, dan berbagai fungsi lainnya.</p>
            <h5>Penggunaan Umum:</h5>
            <ul>
                <li>Authentication</li>
                <li>CSRF Protection</li>
                <li>API Authentication</li>
                <li>Rate Limiting</li>
            </ul>
        `,
        security: `
            <h4>Security Features</h4>
            <p>Laravel menyediakan berbagai fitur keamanan bawaan untuk melindungi aplikasi Anda.</p>
            <h5>Fitur Keamanan:</h5>
            <ul>
                <li>CSRF Protection</li>
                <li>XSS Prevention</li>
                <li>SQL Injection Prevention</li>
                <li>Authentication System</li>
            </ul>
        `,
        mvc: `
            <h4>Model-View-Controller (MVC)</h4>
            <p>Laravel mengimplementasikan pattern MVC untuk mengorganisir kode dengan lebih baik.</p>
            <h5>Komponen MVC:</h5>
            <ul>
                <li>Model: Representasi data dan business logic</li>
                <li>View: Presentasi data kepada user</li>
                <li>Controller: Mengatur alur aplikasi</li>
            </ul>
        `,
        container: `
            <h4>Service Container</h4>
            <p>Service Container adalah tool powerful untuk mengelola class dependencies dan melakukan dependency injection.Service Container adalah tools powerful untuk mengelola dependencies class. Ini memungkinkan dependency injection yang membuat aplikasi lebih modular dan mudah diuji.</p>
            <h5>Fitur Container:</h5>
            <ul>
                <li>Binding</li>
                <li>Resolving</li>
                <li>Automatic Injection</li>
                <li>Contextual Binding</li>
            </ul>
        `,
        composer: `
            <h4>Composer</h4>
            <p>Composer adalah manager dependensi yang paling populer untuk PHP. Digunakan untuk menginstall dan mengelola dependensi-proyek Laravel dengan mudah. Proses instalasi awal proyek Laravel biasanya dimulai dengan menjalankan perintah yang akan mengunduh seluruh dependensi dasar dari proyek tersebut.</p>
            <h5>Perintah Umum:</h5>
            <ul>
                <li><code>composer install</code></li>
                <li><code>composer update</code></li>
                <li><code>composer require vendor/package</code></li>
                <li><code>composer dump-autoload</code></li>
            </ul>
        `,
        packages: `
            <h4>Sistem Paket</h4>
            <p>Sistem paket di Laravel sangatlah fleksibel dan dapat ditingkatkan dengan tambahan paket-paket tertentu. Beberapa contoh paket yang populer di dalam ecosistem Laravel antara lain:</p>
            <h5>Package Popular:</h5>
            <ul>
                <li>Dingo API : paket yang berguna untuk membangun API dengan mudah. Meskipun ada sedikit masalah terkait integritas CI, namun versi alternatifnya masih cukup stabil dan dapat digunakan dengan gampang</li>
                <li>Laravel Mix : Laravel Mix adalah alat yang dikembangkan oleh Jeffrey Way, yang memudahkan kerja sama dengan Gulp. </li>
                <li>Laravel Sail : CLI ringkas yang spesifik untuk aplikasi Laravel. Menggunakan PHP, MySQL, dan Redis, Sail memungkinkan pengembang untuk membuat lingkungan pengembangan dengan Docker tanpa harus memiliki pengalaman Docker sebelumnya. </li>
                <li>Laravel Envoyer : alat yang populer karena kemampuannya melakukan deploymen nol-mati waktu. Alat ini memudahkan pengaturan aktivitas menggunakan perintah Artisan dan memastikan keseluruhan aplikasi tetap aksesibilitas dan tersedianya selama proses deploymen tanpa gangguan sistem fungsional.</li>
            </ul>
        `,
        directory: `
            <h4>Struktur Direktori Laravel</h4>
            <p>Struktur direktori Laravel terdiri dari beberapa folder penting:</p>
            <ul>
                <li>app/ : Berisi logika aplikasi.</li>
                <li>routes/ : Menyimpan file rute. </li>
                <li>resources/ : Menyimpan tampilan dan aset.</li>
                <li>database/: Menyimpan migrasi dan seeder.</li>
            </ul>

            <pre>
├── app/
│   ├── Console/
│   ├── Http/
│   ├── Models/
│   └── Providers/
├── config/
├── database/
├── public/
├── resources/
├── routes/
├── storage/
└── tests/
            </pre>
        `,
        database: `
            <h4>Penggunaan Database</h4>
            <p>Laravel mendukung berbagai jenis database seperti MySQL, PostgreSQL, SQLite, dan SQL Server. Konfigurasi database dilakukan di file “.env”</p>
            <h5>Fitur Database:</h5>
            <ul>
                <li>Multiple Database Support</li>
                <li>Query Builder</li>
                <li>Migrations</li>
                <li>Seeding</li>
            </ul>
        `,
        migration: `
            <h4>Migrasi Database</h4>
            <p>Migrasi memungkinkan Anda untuk mengelola skema database dengan mudah.</p>
            <h5>Perintah Migrasi:</h5>
            <ul>
                <li><code>php artisan make:migration</code></li>
                <li><code>php artisan migrate</code></li>
                <li><code>php artisan migrate:rollback</code></li>
                <li><code>php artisan migrate:fresh</code></li>
            </ul>
        `
    };

    $('#detailModal').on('show.bs.modal', function(event) {
        const button = $(event.relatedTarget);
        const feature = button.data('feature');
        const modal = $(this);

        modal.find('.modal-title').text(button.closest('.card').find('.card-title').text());
        modal.find('.modal-body').html(featureContent[feature]);
    });
});

// Form submission handling with animation
$('#contactForm').on('submit', function(e) {
    e.preventDefault();

    // Add loading state
    var submitBtn = $(this).find('button[type="submit"]');
    submitBtn.html('<i class="fas fa-spinner fa-spin"></i> Mengirim...');
    submitBtn.prop('disabled', true);

    // Simulate form submission
    setTimeout(function() {
        $('#contactForm').trigger('reset');
        submitBtn.html('Kirim Pesan');
        submitBtn.prop('disabled', false);

        // Show success message
        alert('Pesan Anda telah terkirim!');
    }, 1500);
});