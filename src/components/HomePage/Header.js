import '../../css/HeaderStyle.css';

function Header(){
    return(
        <header class="masthead text-white text-center">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-xl-9 mx-auto">
              <h4 class="mb-5">Welcome to Resti Review</h4>
            </div>
            <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form>
                <div class="form-row">
                  <div class="col-12 col-md-9 mb-2 mb-md-0">
                    <input type="email" class="form-control form-control-lg" placeholder="Search For A Resturant..."></input>
                  </div>
                  <div class="col-12 col-md-3">
                    <button type="submit" class="btn btn-block btn-lg btn-primary">Search</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;