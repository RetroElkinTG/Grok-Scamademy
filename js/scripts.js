$(document).ready(function() {
    $('button.button-with-alert').click(() => { alert('Hello!'); });
  });
  
  const shareData = {
    title: "Grok Scamademy",
    text: "I just finished a course on bank scams on Grok Scamademy, an app designed to teach you how to keep yourself cyber safe!",
    url: "https://fftrial.replit.app/",
  };
  
  // Share must be triggered by "user activation"
  const share = async () => {
    await navigator.share(shareData);
  }
  
  // Listen for ALL links at the top level of the document. For
  // testing purposes, we're not going to worry about LOCAL vs.
  // EXTERNAL links - we'll just demonstrate the feature.
  $(document).on(
    "click",
    "a",
    function(event) {
  
      // Stop the default behavior of the browser, which
      // is to change the URL of the page.
      event.preventDefault();
      event.stopPropagation();
  
      // Manually change the location of the page to stay in
      // "Standalone" mode and change the URL at the same time.
  
      var page = $(event.currentTarget).attr("href");
      location.href = window.location.origin + '/' + page;
    }
  );