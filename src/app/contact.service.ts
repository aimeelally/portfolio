import { Injectable } from '@angular/core';
import * as AWS from "aws-sdk";


@Injectable({
  providedIn: 'root'
})

export class ContactService {

  sendMessage(form) {
    
    var LPAWS = {};

    // Initialize the Amazon Cognito credentials provider
    AWS.config.region = 'us-east-1'; // Region
    
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:54c6da73-e1de-481f-ad08-c29c7b3401b9',
    });

    /*AWS.config.credentials.get(function(err) {
      if (err) {
        console.log('1: '+err);  // an error occurred
      }
      else {
        //console.log('2: '+AWS.config.credentials); // successful response
      }
    });*/
    
    if (AWS.config.credentials instanceof AWS.Credentials) {
      AWS.config.credentials.get(function (err) {
        if (err) {
          console.log('1: ' + err);  // an error occurred
        }
        else {
          //console.log('2: '+AWS.config.credentials); // successful response
        }
      });
    }

    var sns = new AWS.SNS();
    var params = {
        Message: form, /* required */
        Subject: 'Browser SNS publish - contact form',
        TopicArn: 'arn:aws:sns:us-east-1:519664206156:contact-aimeelally'
    };
    sns.publish(params, function(err, data) {
      if (err) {
        console.log('3: '+err, err.stack);
        return 'error'; // an error occurred
      }
      else {
        return 'success';
        //turn into a promise and add a success message
        //console.log('4: '+data); // successful response
      }     
    });
  } 
}
