          /*Menu-toggle*/
          $("#menu-toggle").click(function(e) {
              e.preventDefault();
              $("#wrapper").toggleClass("active");
          });
          $(document).ready(function() {
              $('[data-toggle="tooltip"]').tooltip();
          });
          //Links das redes sociais e mail
          function linkedin() {
              window.open("https://www.linkedin.com/in/thiago-lucio-bittencourt-b0452825", "_blank");
          };

          function github() {
              window.open("https://github.com/thiagolucio", "_blank");
          };

          function wordpress() {
              window.open("https://thiagolucioweb.wordpress.com/", "_blank");
          };

          function blogger() {
              window.open("http://thiagolucioblog.blogspot.com.br/", "_blank");
          };

          function mail() {
              window.open("mailto:thiagolucio@gmail.com", "_blank");
          };
          //scroll
         $('body').scrollspy({ target: '#spy' });
         $('#spy').scrollspy();
