<template>
  <div class="container-scroller">
    <!-- partial:partials/_horizontal-navbar.html -->
    <div class="horizontal-menu">
      <nav class="navbar top-navbar col-lg-12 col-12 p-0">
        <div class="nav-top flex-grow-1">
          <div class="container d-flex flex-row h-100 align-items-center">
            <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <a class="navbar-brand brand-logo" href="index.html"><img src="assets/img/logo.svg"></a>
              <a class="navbar-brand brand-logo-mini" href="index.html"><img src="assets/img/logo.svg"></a>
            </div>
            <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end flex-grow-1">
              <ul class="navbar-nav navbar-nav-right">
                <li class="nav-item nav-profile dropdown">
                  <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                    Hi, Admin
                  </a>
                  <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">

                    <a href="data_siswa.html" class="dropdown-item">
                      <i class="mdi mdi-view-dashboard-outline menu-icon"></i>
                      Beranda
                    </a>
                    <a href="profile.html" class="dropdown-item">
                      <i class="mdi mdi-account-settings text-primary"></i>
                      Profile
                    </a>
                    <a href="produkSaya.html" class="dropdown-item">
                      <i class="mdi mdi-file-document-box-outline menu-icon"></i>
                      Produk Saya
                    </a>
                    <a class="dropdown-item">
                      <i class="mdi mdi-logout text-primary"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
              <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                data-toggle="horizontal-menu-toggle">
                <span class="mdi mdi-menu"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      

      <!-- partial -->
      <div class="container-fluid page-body-wrapper">
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
              <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <p class="card-title float-left"><b>PRODUK</b></p>
                    <p class="card-description float-right">
                      <a href="#" class="btn btn-sm btn-success btn-icon-text" data-toggle="modal"
                        data-target="#modalSiswa">
                        <i class="mdi mdi-plus btn-icon-prepend"></i>
                        Produk
                      </a>
                    </p>
                    <div class="table-responsive">

                      

                      <div class="card-deck">
                        <!-- <h2>Contoh Card dengan Image</h2>
                        <hr /> -->
                        <div class="row row-cols-1 row-cols-md-2">
                          <div class="col mb-4">
                            <div class="card" style="width:200px">
                              <img class="card-img-top"
                                src="../../public/template_frontend/assets/img/badge-9th-gen-core-i9-1x1.png.rendition.intel.web.550.550.png"
                                alt="PRODUK" style="width:100%">
                              <div class="card-body">
                                <h4 class="card-title">Prosessor Intel Core i9-9999K</h4>
                                <h4 class="card-title">Rp 5.000</h4>
                                <p class="card-text">Kota Malang</p>
                                <a href="#" class="btn btn-primary">Detail Info</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br>
                    
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
                </div>
              </div>
          </div>

        </div>
</template>


<script>
export default {

}
</script>

<style>

</style>