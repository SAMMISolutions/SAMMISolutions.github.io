---
title: Submit Extension
layout: ext
collection: extensions
permalink: /extensions/submitTest
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easymde/dist/easymde.min.css">
<script src="https://cdn.jsdelivr.net/npm/easymde/dist/easymde.min.js"></script>

<div class="mt-2 mb-3">
  <h3>Submission Form</h3>
</div>
<form id="extsubmit" method="POST"
  action="https://lb-staticman.herokuapp.com/v3/entry/github/lioranboard/lioranboard.github.io/main/comments">
  <input name="options[redirect]" type="hidden" value="https://sammi.solutions/extensions/success">
  <input name="options[type]" type="hidden" value="extensions">
  <input name="fields[permalink]" id ="permalink" type="hidden" value="">
  <input type="hidden" name="options[reCaptcha][siteKey]" value="6Ldk0KccAAAAAOmoMCTuurrpYp06Yu4K7cvRsu6h">
  <input type="hidden" name="options[reCaptcha][secret]"
    value="ec9873DSqTi1ZXkXPb4Z9ogdlqnn9yuzRpapTIlrWU2w8/X300R7mXcvonnELyNierihg9KxXgqfpBmAECYV0qVUFPUSltVGMgtRWPnZ8jY306ETQ3zVUwHlPIaynbrArmvp2CdTXBiaXmM9wuGkgRY6WUfFwMOkj8Zq4oB9nUfAUx+m8K47fbBOHbjUpyZtC+1bjmFbCDBcznQdzig+UV97pzUEHCVKmMrBKBGkeE8wB6w/f9DhwD6fPnN0m9KDdwqcEweegzBjnICVIegj9KGn1P6sMYex8u+z9AM+3H715sCXef7XygtJlttxCyT9NwY4Zy+0IEm6zHRDDRKe3Q==">
  <div>
  <textarea name="fields[overview]" class="form-control mx-2 mb-2 w-auto" placeholder="Overview" id="overview"></textarea>
  </div>


  <button type="submit" class="btn btn-primary g-recaptcha mt-2 mx-2 mb-5"
    data-sitekey="6Ldk0KccAAAAAOmoMCTuurrpYp06Yu4K7cvRsu6h" data-callback='onSubmit'>Submit for review</button>
</form>

<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script>

const overviewMd = createMD('overview')
const setupMd = createMD('overview')


function createMD (e) {
const newMDE = new EasyMDE ({
element: document.getElementById(e),
autosave: {
		enabled: true,
		uniqueId: "MyUniqueID",
		delay: 1000,
	},
placeholder: 'Extension overview and info about its functionalities'

});
return newMDE
}

slugify = ( text ) => {
    return text
    .toString()
    .normalize( 'NFD' )                   
    .replace( /[\u0300-\u036f]/g, '' )  
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-'); 
  };

  function onSubmit(token) {
    const category = document.getElementById('category').value
    const title = document.getElementById('title').value
    const permalink = `extensions/${category}/${slugify(title)}`
    document.getElementById('permalink').value = permalink
    const overview = document.getElementById('overview')
    const overviewReplaced = overview.value.replace(/(?:\r\n|\r|\n)/g, '<br>');
    const setup = document.getElementById('setup')
    const setupReplaced = setup.value.replace(/(?:\r\n|\r|\n)/g, '<br>');
    overview.value = overviewReplaced
    setup.value = setupReplaced
    document.getElementById("extsubmit").submit();
  }
</script>