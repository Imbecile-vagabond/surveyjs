﻿/// <reference path="template.ko.html.ts" />

module Survey {
    export class SurveyTemplateTextBase {
        constructor() {
        }
        public replaceText(replaceText: string, id: string, questionType: string = null) {
            id = this.getId(id, questionType);
            var pos = this.text.indexOf(id);
            if (pos < 0) return;
            pos = this.text.indexOf('>', pos);
            if (pos < 0) return;
            var startPos = pos + 1;
            var endString = "</script>";
            pos = this.text.indexOf(endString, startPos);
            if (pos < 0) return;
            this.text = this.text.substr(0, startPos) + replaceText + this.text.substr(pos);
        }
        protected getId(id: string, questionType: string) {
            var result = 'id="survey-' + id;
            if (questionType) {
                result += "-" + questionType;
            }
            return result + '"';
        }
        protected get text(): string { return ""; }
        protected set text(value: string) {  }
    }
    export class SurveyTemplateText extends SurveyTemplateTextBase {
        protected get text(): string { return template.ko.html; }
        protected set text(value: string) { template.ko.html = value; }
    }
}