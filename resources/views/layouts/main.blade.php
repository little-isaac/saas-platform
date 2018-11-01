<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="icon" href="{{ asset('favicon.png') }}" type="image/png" sizes="16x16">
        <title>@yield('title',env('APP_NAME'))</title>
        <script>
            <?php
            $Laravel = json_encode([
                'csrfToken' => csrf_token(),
                    ]);
            ?>
            window.Laravel = {!! $Laravel !!};
        </script>
        @yield('css')
        <!-- 
            <link href="{{ secure_asset('css/admin/components.css') }}" rel="stylesheet" type="text/css"/>
        -->
    </head>


    <body class="fixed-left-void">
        <div id="root"></div>
        @yield('js')
    </body>
</html>