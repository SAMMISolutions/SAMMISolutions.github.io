---
layout: ext_single
title: Text Recognition
slug: ocr
desc: Turns text from OBS sources into SAMMI variables
category: utilities
date: '2024-12-09T00:00:00-00:00'
permalink: extensions/utilities/:slug
download_url: https://ko-fi.com/s/94dfb69f80
developer_name: Chrizzz
developer_url: https://linktr.ee/chrizzz_1508
icon_local: ocr_icon.png
screenshots_local: ocr_ss1.png
trailer: https://sammi.solutions/assets/videos/extensions/ocr.mp4
version: 1.0
sammi_version: '2024.4.0^'
platform: Any
overview: |
    #### Description
    - This extension turns text from OBS sources into SAMMI variables either with Google Vision or Iron OCR
    
    #### Google Vision Text Recognition Pros
    - Accuracy: Google Vision OCR is powered by Google's advanced machine learning algorithms, making it highly accurate in recognizing text from images.
    - Multiple Language Support: Google Vision OCR supports a wide range of languages, making it suitable for international applications.
    - Regular Updates: Google continually updates its services to improve accuracy and add new features.
    - Multiple Requests can be made at the same time
    - Can also be used to output an object that contains all texts in an object array with their coordinates
    - New users can 300$ free credits for testing in the first 3 months
    
    #### Google Vision Text Recognition Cons
    - Cost: You will be billed by usage after your 1000 free Text Recognitions per month were used (currently you pay 1,50$ per 1000 additional images)
    - Dependency on Internet Connection: It requires a stable internet connection to access the API, which can be a drawback if you need to work offline.
    - Privacy Concerns: Uploading sensitive data to a cloud service may raise privacy and security concerns, especially for confidential documents.
    - Rate Limits: Google imposes rate limits on API usage, which could affect your application's responsiveness during high-demand periods.
    
    #### IronOCR Pros
    - Offline Processing: IronOCR allows you to perform OCR locally, making it suitable for applications that need to work offline or have data privacy concerns.
    - Cost Savings: Once you purchase the IronOCR library, there are no ongoing costs or API usage fees, making it cost-effective in the long term.
    - Speed: Local processing can be faster than making API calls, especially for large volumes of documents, as you don't have to deal with internet latency.
    - Trial licenses for 30 days can be generated per mail
    
    #### IronOCR Pros
    - Initial Setup: Setting up and configuring IronOCR is more complicated
    - Accuracy: While IronOCR is generally accurate, it may not match the accuracy of cloud-based services like Google Vision OCR, which benefit from continuous machine learning improvements.
    - Language Support: IronOCR may have limitations in terms of language support compared to cloud-based services with extensive language libraries.
    - Resource Usage: OCR processing can be resource-intensive, and running it locally might require powerful hardware, especially for high-throughput applications.
    - Multiple requests queue up instead of running async
setup_url: https://sammi.solutions/extensions/install
privacy_collect: false
---
