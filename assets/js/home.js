
var $fileInput = $('.file-input');
var $droparea = $('.file-drop-area');

// highlight drag area
$fileInput.on('dragenter focus click', function () {
    $droparea.addClass('is-active');
});

// back to normal state
$fileInput.on('dragleave blur drop', function () {
    $droparea.removeClass('is-active');
});

// change inner text
$fileInput.on('change', function () {
    var filesCount = $(this)[0].files.length;
    var $textContainer = $(this).prev();

    if (filesCount === 1) {
        // if single file is selected, show file name
        var fileName = $(this).val().split('\\').pop();
        $textContainer.text(fileName);
        $('.submit-btn').addClass('active-btn')

    } else {
        // otherwise show number of files
        $textContainer.text(filesCount + ' files selected');
    }
});
function extractDateAndTime(createdAt) {
    const dateObj = new Date(createdAt);

    // Extracting date components
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so adding 1
    const day = dateObj.getDate().toString().padStart(2, '0');

    // Extracting time components
    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');

    // Formatting the date and time
    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes} ${amPm}`;

    return { date: formattedDate, time: formattedTime };
}

