# Monobank Project

## Author

- Oleh Tysovskyi
- Email: oleg.tisovsky228@gmail.com
- Telegram: [@tysyk](https://t.me/@tysyk)

## Getting Started

To get started with this project:

1. Clone the repository from GitHub.
2. Install all dependencies using `npm install`.
3. Set up the necessary configurations for your environment.
4. Run the project using `npm start` in the `server` directory and then the same in `client`.

## Project Documentation

Welcome to the documentation for the Monobank project. This document provides an overview of the project, its features, technologies used, implementation timeline, and additional information.

### Project Overview

Monobank is a modern digital bank offering a range of banking services and financial products to its users. With seamless integration, secure authorization, and robust cloud-based infrastructure, Monobank ensures a smooth and efficient banking experience for its customers.

### List of Application Features

1. **User Registration:** Users can sign up for a Monobank account using their Google credentials or email, ensuring a secure and hassle-free registration process.

2. **Account Dashboard:** Upon logging in, users are greeted with a personalized dashboard displaying an overview of their account balances, recent transactions, and other relevant information.

3. **Transaction History:** Users can view a detailed history of their transactions, including date, amount, and transaction type, providing transparency and accountability.

4. **Money Transfer:** Users can easily transfer funds between their accounts or to other Monobank users, facilitating seamless peer-to-peer transactions.

5. **Bill Payments:** Monobank allows users to conveniently pay their bills directly from their accounts, eliminating the need for manual payment processing.

6. **Loan Application:** Users can apply for various types of loans directly through the Monobank platform, streamlining the loan application and approval process.

7. **Savings Goals:** Users can set savings goals and track their progress over time, helping them achieve their financial objectives more effectively.

8. **Budgeting Tools:** Monobank provides users with tools and insights to create and manage budgets, empowering them to make smarter financial decisions.

9. **Customer Support:** Users can access customer support directly from the application, enabling quick resolution of any issues or inquiries they may have.

10. **Security Features:** Monobank implements robust security measures, including two-factor authentication and encryption, to safeguard user data and prevent unauthorized access.

11. **Notifications:** Users receive real-time notifications for important account activities, such as deposits, withdrawals, and upcoming payments, keeping them informed at all times.

12. **Feedback Mechanism:** Monobank allows users to provide feedback and suggestions directly through the application, fostering continuous improvement and user satisfaction.

### Technologies Used

- **Frontend:** React
- **Backend:** Express
- **Database ORM:** Sequelize
- **Authentication:** Passport.js with Google OAuth 2.0
- **Cloud Platform:** Azure
- **CI/CD:** GitHub Actions

Using React for the frontend, Express for the backend, Sequelize for database operations, and Passport.js with Google OAuth 2.0 strategy for authentication provides a robust foundation for building a scalable, responsive, and secure digital banking application like Monobank.

### Implementation Timeline

The project's implementation timeline follows a structured approach, divided into several weeks. Each week focuses on implementing specific features, setting up necessary infrastructure, and ensuring the project's progress aligns with the overall goals.

### Week 1

- [x] Implement feature: User Registration
- [x] Set up Azure cloud environment
- [x] Create GitHub repository
- [ ] Configure Continuous Integration/Continuous Delivery pipeline
- [x] Draft Getting Started documentation

### Week 2

- [x] Implement feature: Account Dashboard
- [x] Set up SQL database on Azure
- [x] Integrate Sequelize for database operations
- [x] Design architecture diagram
- [x] Begin writing project documentation

### Week 3

- [x] Implement feature: Transaction History
- [x] Integrate Google OAuth 2.0 for user authorization
- [ ] Implement 95% of code using services approach and Dependency Injection
- [x] Finalize project documentation
- [x] Perform initial unit testing

### Week 4

- [x] Implement feature: Money Transfer
- [ ] Integrate open API for additional functionality
- [x] Set up Storage Account on Azure for data storage
- [x] Refine architecture and infrastructure diagrams
- [x] Continue unit testing and code review

### Week 5
- [x] Implement feature: Bill Payments
- [x] Implement welcome email notification for new users
- [ ] Configure Service Bus for message processing
- [x] Update Readme.md with comprehensive documentation
- [ ] Increase unit test coverage to meet requirements

### Week 6
- [ ] Implement feature: Loan Application
- [ ] Optimize application for Chrome PC browsers
- [ ] Conduct postman testing for API endpoints
- [ ] Review and refine code for clean coding principles
- [ ] Perform integration testing and bug fixes

### Week 7
- [x] Implement feature: Savings Goals
- [x] Fine-tune budgeting tools functionality
- [x] Enhance user interface for improved usability
- [ ] Conduct load testing to assess performance
- [x] Address any remaining issues identified through testing

### Week 8
- [x] Implement feature: Customer Support
- [ ] Configure automated deployment to Azure
- [x] Perform final security audit and penetration testing
- [x] Conduct user acceptance testing
- [ ] Prepare for production deployment

### Week 9
- [ ] Implement feature: Security Features
- [x] Monitor application performance and stability
- [ ] Gather user feedback and iterate on features as needed
- [x] Prepare release notes for production deployment
- [x] Conduct final review and validation checks

### Week 10
- [x] Implement feature: Notifications
- [x] Deploy application to production environment in Azure
- [x] Monitor production environment for any issues
- [x] Provide support and assistance for users as needed
- [x] Begin planning for future enhancements and updates

### Week 11
- [ ] Implement feature: Feedback Mechanism
- [ ] Analyze user feedback and prioritize feature requests
- [ ] Address any post-deployment issues or bugs
- [ ] Document lessons learned and areas for improvement
- [ ] Plan for ongoing maintenance and support

### Week 12
- [ ] Conduct project retrospective to review successes and challenges
- [ ] Prepare final project report and documentation
- [ ] Archive GitHub repository for future reference
- [ ] Celebrate project completion and team achievements
- [ ] Handover project to maintenance team for long-term management

### Additional Information

- **Feedback and Contribution:** We welcome feedback and contributions from the community. If you have any suggestions or would like to contribute to the Monobank project, feel free to reach out to us via email or Telegram.

- **Acknowledgements:** We would like to thank all contributors and supporters of the Monobank project for their valuable contributions and feedback.

This comprehensive documentation provides insights into the Monobank project's features, technologies, and implementation approach, facilitating better understanding and collaboration among project stakeholders.

### Future enhancements and updates

### 1. Mobile Application:
- Understand what users want from a mobile app and what features they expect.
- Start designing the mobile app, focusing on creating an interface that's easy to use on smartphones and tablets.
- Bring in mobile app developers to build the app's functionality.
- Test the mobile app extensively to ensure it works well on different devices and screen sizes.
- Release the mobile app for iOS and Android platforms after thorough testing and feedback.

### 2. Automatic Account Replenishment:
- Find out if users are interested in automatic account replenishment and what their preferences are.
- Develop a system for automatic account replenishment that takes into account security requirements and user convenience.
- Integrate this functionality with payment systems and bank accounts.
- Allow users to customize their automatic replenishment settings through the web platform or mobile app.
- Test and optimize the automatic replenishment system before rolling it out to production.

### 3. Multi-Currency Operations Support:
- Investigate whether users need support for multi-currency operations and if it aligns with your app's goals.
- Design mechanisms for handling transactions in different currencies, considering exchange rates and fees.
- Integrate with financial services and banks to support multi-currency operations.
- Provide users with the ability to manage multi-currency operations through the app's interface.
- Test the multi-currency operation system thoroughly to ensure it's reliable and user-friendly before releasing it to users.

### 4. Optimize for Dark Mode:
- Research user preferences regarding dark mode.
- Design a new interface optimized for dark mode that's easy to use in low light.
- Test the new design on various devices and screen resolutions.
- Release an app update with dark mode support and inform users about the new option.

### 5. Language Change Feature:
- Research user preferences for language options.
- Implement language selection feature.
- Test language change functionality across devices.
- Release app update with language change feature.

### 6. Support for Smart Payment Systems:
- Explore integration possibilities with smart payment systems like Apple Pay or Google Pay.
- Develop interfaces for interacting with these systems that are convenient and secure for users.
- Test the integration with smart payment systems and ensure compatibility with different devices and operating systems.
- Release an app update with support for smart payment systems and notify users about the new feature.

### 7. Customer Support Chatbots:
- Analyze user needs and determine the best way to implement chatbot support.
- Choose a platform for chatbot development, such as Facebook Messenger, Telegram, or Slack.
- Develop a chatbot that can answer common user questions, provide information about the app's functionality, and assist with problem-solving.
- Test and fine-tune the chatbot before integrating it into the app.
- Release an app update with chatbot support and inform users about the new option for getting help via chat.
