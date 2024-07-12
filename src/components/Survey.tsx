'use client'

import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import 'survey-core/defaultV2.css'
import { json } from '../../data/survey_json.js'
  
export default function SurveyComponent() {
  const survey = new Model(json);
  survey.onComplete.add(function (sender, options) {
    // Display the "Saving..." message (pass a string value to display a custom message)
    // options.showSaveInProgress();
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://87dd-2001-ee0-d784-cd70-d913-3e78-7d4f-7135.ngrok-free.app/surveys");
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.onload = xhr.onerror = function () {
      if (xhr.status == 200) {
        // Display the "Success" message (pass a string value to display a custom message)
       // options.showSaveSuccess();
        // Alternatively, you can clear all messages:
        // options.clearSaveMessages();
      } else {
        // Display the "Error" message (pass a string value to display a custom message)
        //options.showSaveError();
      }
    };
    xhr.send(JSON.stringify(sender.data));
  });
  return (
    <Survey model={survey}/>
  );
}
