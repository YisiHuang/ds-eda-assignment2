## EDA Assignment - Distributed Systems.

__Name:__ Yisi Huang

__YouTube Demo link__ - [\[The URL of the video demonstration of the app.\]](https://youtu.be/9TxDmmn_4Gk?si=wDJFCXme_MR11A2W)


### Phase 1.

+ Confirmation Mailer - Fully implemented.
    - Lambda Function: confirmationMailer.ts
+ Rejection Mailer - Fully implemented.
    - Lambda Function: rejectionMailer.ts
+ Process Image - Fully implemented.
    - Lambda Function: processImage.ts

### Phase 2 (if relevant).

+ Confirmation Mailer - Fully implemented.
+ Rejection Mailer - Fully implemented.
+ Process Image - Fully implemented.
+ Update Table - Fully implemented.
    - Lambda Function: updateImage.ts
+ Delete Table - Fully implemented.
    - Lambda Function: deleteImage.ts

### Phase 3 (if relevant).

All user-initiated events are now published to one SNS topic, and all the subscribers must filter out those messages of interest to them using attribute or message body filtering techniques.

+ Confirmation Mailer - Fully implemented.
+ Process Image - Fully implemented.
+ Update Table - Fully implemented.
    - Lambda Function: updateImage.ts
+ Delete Mailer - Fully implemented.
    - Lambda Function: deleteMailer.ts

