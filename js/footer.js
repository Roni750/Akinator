'use strict'

$(renderFooter)

function renderFooter() {
    const strHTML = `
    <!-- Footer -->
    <footer class="text-center text-lg-start bg-light text-muted mt-auto">
      <!-- Section: Links  -->
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <!-- Grid row -->
          <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <!-- Content -->
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>Akinator.io
              </h6>
              <p>
              Akinator is a video game developed by French company Elokence. During gameplay, it attempts to determine what fictional or real-life character, object, or animal the player is thinking of by asking a series of questions.
              </p>
            </div>
            <!-- Grid column -->
    
            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a href="#!" class="text-reset">Akinator.io</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Snake.io</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Agar.io</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Miniclip.io</a>
              </p>
            </div>
            <!-- Grid column -->
    
            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="https://facebook.com" class="text-reset">Facebook Page</a>
              </p>
              <p>
                <a href="../about.html" class="text-reset">About</a>
              </p>
              <p>
                <a href="../stats.html" class="text-reset">Data</a>
              </p>
              <p>
                <a href="../contact.html" class="text-reset">Help</a>
              </p>
            </div>
            <!-- Grid column -->
    
            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i class="fas fa-home me-3"></i> Ramat Gan, Habonim 4, IL</p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                support@akinator.com
              </p>
              <p><i class="fas fa-phone me-3"></i> + 972 554 6848</p>
              <p><i class="fas fa-print me-3"></i> + 972 195 6294</p>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->
    
      <!-- Copyright -->
      <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
        © 2023 Copyright:
        <a class="text-reset fw-bold" href="../index.html">Akinator.io</a>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->`
    $('footer').html(strHTML)
}