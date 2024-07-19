  /* <!-- 分流 -->

  var currentUrl = window.location.href;
  var adminUrlPrefix = "?";

  if (currentUrl.includes(adminUrlPrefix)) {
    console.log("The current URL includes", adminUrlPrefix, "Script execution stopped.");
  } else {
    var redirectCookie = getCookie("redirected");

    if (!redirectCookie) {
      $.get("https://api.ipdata.co?api-key=f3ec9a1cee61dbb4204c48020f7c4c8d4d8a85018426c5d5ebc36c7d", function (response) {
        var redirectionURL;

        if (response.is_eu) {
          redirectionURL = "https://global.revopoint3d.com/en-eur";
        } else {
          switch (response.country_code) {
            case 'US':
              redirectionURL = "https://www.revopoint3d.com";
              break;
            case 'UK':
              redirectionURL = "https://global.revopoint3d.com/en-uk";
              break;
            case 'JP':
              redirectionURL = "https://www.revopoint3d.jp";
              break;
            default:
              redirectionURL = "https://global.revopoint3d.com";
          }
        }

        var currentPath = window.location.pathname;
        var currentHash = window.location.hash;

        var url = new URL(redirectionURL);
        if (currentPath) {
          url.pathname = currentPath;
        }

        if (currentHash) {
          url.hash = currentHash;
        }

        window.location.href = url.href;

        setCookie("redirected", "true", 1); // 1 day expiration
      }, "jsonp");
    }

    // Cookie
    function setCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + value + expires + "; path=/";
    }

    function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
  }

<!-- 分流end -->  */
document.addEventListener("DOMContentLoaded", function() {
        var currentURL = window.location.href;
        var storebElement = document.getElementById("countryselect");

        var dropDownContent = storebElement.nextElementSibling;

        if (currentURL.includes("https://www.revopoint3d.com")) {
            storebElement.innerHTML = '<div class="flag flag-usa"></div><span lang="en">USA</span>';
        } else if (currentURL.includes("https://global.revopoint3d.com/en-uk")) {
            storebElement.innerHTML = '<div class="flag flag-uk"></div><span lang="en">UK</span>';
        } else if (currentURL.includes("https://global.revopoint3d.com/en-eur")) {
            storebElement.innerHTML = '<div class="flag flag-eu"></div><span lang="en">Europe</span>';
        } else if (currentURL.includes("https://global.revopoint3d.com/")) {
            storebElement.innerHTML = '<div class="flag flag-global"></div><span lang="en">Global</span>';
        } else if (currentURL.includes("https://www.revopoint3d.jp/")) {
            storebElement.innerHTML = '<div class="flag flag-ja"></div><span lang="en">日本</span>';
        } else if (currentURL.includes("https://global.revopoint3d.com/en-fr/")) {
            storebElement.innerHTML = '<div class="flag flag-fr"></div><span lang="fr">France</span>';
        } else if (currentURL.includes("https://global.revopoint3d.com/en-de")) {
            storebElement.innerHTML = '<div class="flag flag-de"></div><span lang="de">Germany</span>';
        }
    });


   function layer_country() {
        layer.open({
            type: 1,
            title: '<div class=""><h3>国・地域を選択</h3></div>',
            area: ['auto', 'auto'],
            content: '<div class=""><p>商品は国や地域によって価格や在庫が異なる場合があります。</p></div>' +
                  '<ul class="countrylist">' +
                '<a href="https://www.revopoint3d.com/" class="country-item"><li><span class="countrylist--desc">United States</span><span class="countrylist--lang">English/$USD</span></li></a> ' +
                '<a href="https://global.revopoint3d.com/en-eur" class="country-item"><li><span class="countrylist--desc">Europe</span><span class="countrylist--lang">English/€EUR</span></li></a>' +
                '<a href="https://global.revopoint3d.com/en-uk" class="country-item"><li><span class="countrylist--desc">United Kingdom</span><span class="countrylist--lang">English/£GBP</span></li></a> ' +
              '<a href="https://global.revopoint3d.com/fr-fr" class="country-item"><li><span class="countrylist--desc">France</span><span class="countrylist--lang">Français/€EUR</span></li></a> ' +
              '<a href="https://global.revopoint3d.com/de-de" class="country-item"><li><span class="countrylist--desc">Deutschland</span><span class="countrylist--lang">Deutsch/€EUR</span></li></a> ' +
                '<a href="https://global.revopoint3d.com/" class="country-item"><li><span class="countrylist--desc">Global</span><span class="countrylist--lang">English/$USD</span></li></a>' +
                '<a href="https://www.revopoint3d.jp/" class="country-item"><li><span class="countrylist--desc">日本</span><span class="countrylist--lang">日本語/¥JPY</span></li></a>'+
                '<a href="https://tw.revopoint3d.com/" class="country-item"><li><span class="countrylist--desc">台灣</span><span class="countrylist--lang">繁體中文/NT$</span></li></a>'+
                '</ul>'
        });
    }

