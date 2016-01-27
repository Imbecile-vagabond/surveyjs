---
layout: example
title: Text (type:'text')
---
<p>
    Text Size: <select onChange="survey.getQuestionByName('email').size = parseInt(this.value); survey.render();">
        <option value='10'>10</option>
        <option value='25'>25</option>
        <option value='50'>50</option>
        <option value='75'>75</option>
        <option value='100'>100</option>
    </select> default is 25.
    <pre class="brush:js">survey.getQuestionByName('email').size = yourvalue; survey.render();"</pre>
</p>
{% capture survey_setup %}
var survey = new Survey.Survey({% include surveys/questiontype-text.json %});
{% endcapture %}

{% include live-example-code.html %}