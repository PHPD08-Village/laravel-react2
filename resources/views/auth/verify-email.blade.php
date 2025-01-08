<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>註冊驗證</title>
    <style>
        body {
            background: linear-gradient(135deg, #e0c3fc, #8ec5fc);
            font-family: 'Arial', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }

        .verification-container {
            background-color: #fff;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 500px;
            text-align: center;
        }

        .message, .status-message {
            margin-bottom: 20px;
            color: #333;
        }

        .message {
            font-size: 16px;
        }

        .status-message {
            font-size: 14px;
            color: #38a169;
        }

        .action-buttons {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
        }

        .resend-button {
            background: linear-gradient(135deg, #5673eb, #3b5fd0);
            color: white;
            padding: 12px 20px;
            border-radius: 10px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            transition: background 0.3s;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .resend-button:hover {
            background: linear-gradient(135deg, #3b5fd0, #5673eb);
        }

        .resend-button:focus {
            outline: none;
            box-shadow: 0 0 0 2px #5673eb;
        }

        .logout-button {
            background: transparent;
            color: #5673eb;
            font-size: 14px;
            text-decoration: underline;
            cursor: pointer;
            border: none;
            transition: color 0.3s;
        }

        .logout-button:hover {
            color: #3b5fd0;
        }
    </style>
</head>
<body>
    <div class="verification-container">
        <div class="message">
            {{ __('感謝您的註冊！在開始之前，請點擊我們剛發送到您信箱的連結來驗證您的電子郵件地址。如果您沒有收到郵件，我們會再重新發送一次。') }}
        </div>

        @if (session('status') == 'verification-link-sent')
            <div class="status-message">
                {{ __('新的驗證連結已發送至您註冊時提供的電子郵件地址。') }}
            </div>
        @endif

        <div class="action-buttons">
            <form method="POST" action="{{ route('verification.send') }}">
                @csrf
                <button type="submit" class="resend-button">
                    {{ __('重新發送郵件') }}
                </button>
            </form>

            <form method="POST" action="{{ route('login') }}">
                @csrf
                <!-- 路由要建 -->
            </form>
        </div>
    </div>
</body>
</html>
