$(document).ready(function () {
    let $fileInput = $(".file-input");
    let $droparea = $('.file-drop-area');

    $fileInput.on('dragenter focus click', function () {
        $droparea.addClass('is-active');
    });

    $fileInput.on('dragleave blur drop', function () {
        $droparea.removeClass('is-active');
    });

    $fileInput.on('change', function () {
        let fileCount = $(this)[0].files.length;
        let $textContainer = $(this).prev();
        if (fileCount === 1) {
            let fileName = $(this).val().split("\\").pop();
            $textContainer.text(fileName);
            $('.submit-btn').addClass('active-btn');
        } else {
            $textContainer.text(fileCount + ' files selected');
        }
    });
});