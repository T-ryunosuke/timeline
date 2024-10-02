document.addEventListener("turbo:load", function () {
  const childhoodImageInput = document.getElementById('childhood_images');

  if (childhoodImageInput) {
    childhoodImageInput.addEventListener('change', function(event) {
      const files = event.target.files;
      const previewsContainer = document.getElementById('previews');
      previewsContainer.innerHTML = '';

      Array.from(files).forEach(function(file) {
        const reader = new FileReader();
        const previewImage = document.createElement('img');
        previewImage.classList.add('preview-image', 'max-h-52', 'mt-3');

        reader.onload = function(e) {
          previewImage.src = e.target.result;
          previewsContainer.appendChild(previewImage);
        };

        reader.readAsDataURL(file);
      });
    });
  }


  const adolescenceImageInput = document.getElementById('adolescence_image');

  if (adolescenceImageInput) {
    adolescenceImageInput.addEventListener('change', function (event) {
      const reader = new FileReader();
      let file = event.target.files[0];
      const first_preview = document.getElementById('first_preview');

      reader.onload = function(e) {
        first_preview.src = e.target.result;
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    });
  }


  const adulthoodImageInput = document.getElementById('adulthood_image');

  if (adulthoodImageInput) {
    adulthoodImageInput.addEventListener('change', function (event) {
      const reader = new FileReader();
      let file = event.target.files[0];
      const second_preview = document.getElementById('second_preview');

      reader.onload = function(e) {
        second_preview.src = e.target.result;
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    });
  }



  const matureAgeImageInput = document.getElementById('mature_age_image');

  if (matureAgeImageInput) {
    matureAgeImageInput.addEventListener('change', function (event) {
      const reader = new FileReader();
      let file = event.target.files[0];
      const third_preview = document.getElementById('third_preview');

      reader.onload = function(e) {
        third_preview.src = e.target.result;
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    });
  }




});
