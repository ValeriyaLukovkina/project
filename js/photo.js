;(function getPhoto (selectorPortfolio) {
    let portfolio = document.querySelector(selectorPortfolio);
    let portfolioScrol = portfolio.querySelectorAll('.portfolio_scroll');
    let portfolioPhotoBefore = portfolio.querySelectorAll('.portfolio_photo_before');
    let portfolioPhotoAftrer = portfolio.querySelectorAll('.portfolio_photo_after');
    let portfolioPhotoWrp = portfolio.querySelectorAll('.portfolio_photo_wrp');
    let width = 500
    for (let i = 0; i < portfolioScrol.length; i++) {
        portfolioScrol[i].addEventListener ('mousedown', function(e) {
            e.preventDefault();
            portfolioScrol[i].style.pointerEvents = 'none';
            portfolioPhotoWrp[i].addEventListener('mousemove', getMove)
        });

        portfolioPhotoWrp[i].addEventListener ('mouseup', function(e) {
            e.preventDefault();
            portfolioScrol[i].style.pointerEvents = 'all';
            portfolioPhotoWrp[i].removeEventListener('mousemove', getMove)
        });

        portfolioScrol[i].addEventListener('click', function() {
            event.preventDefault();
        })

        function getMove(e) {
            portfolioScrol[i].style.left = e.layerX + 'px';
            portfolioPhotoBefore[i].style.clip = 'rect(0px,500px,400px,' + e.layerX + 'px)'; 
            portfolioPhotoAftrer[i].style.clip = 'rect(0px,' + e.layerX + 'px,400px, 0)'; 
        }        
    }
})('.portfolio');