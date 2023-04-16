'use strict'

$(renderHeader)

function renderHeader() {
    const strHTML = `
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="../index.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="../about.html">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="../app.html">Akinator</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="../contact.html">Contact Us</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Statistics
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="../stats.html">New guesses</a></li>
                      <li><a class="dropdown-item" href="#">Most frequent</a></li>
                    </ul>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>`
          $('header').html(strHTML)
}