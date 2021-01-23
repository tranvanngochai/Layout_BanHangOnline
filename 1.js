 $(function() {
         $khoimonan = $('.nhieumon').isotope({
             // options
             itemSelector: '.motmon',
             layoutMode: 'masonry'
         });
         $khoimonan.imagesLoaded().progress(function() {
             $khoimonan.isotope('layout');
         });
         $('.tieudect a').click(function() {
             dulieu = $(this).data('monan');
             $khoimonan.isotope({
                 filter: dulieu
             })
             return false;
         });
         // xu ly responsive
         /*tinh ra so div co ten la .motmon
         soluongmon = $('.motmon').length ;
         docao = soluongmon*120;
         console.log(docao);

         $('.noidungct').css({'height':docao})*/
         if ($('.motmon').length) console.log('co div motmon trong web')
     })
     //js cho wo
     new WOW().init();
          