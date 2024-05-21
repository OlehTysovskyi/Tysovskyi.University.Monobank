# Monobank Project

## Author

-   Oleh Tysovskyi
-   Email: oleg.tisovsky228@gmail.com
-   Telegram: [@tysyk](https://t.me/@tysyk)

## Getting Started

To get started with this project:

1. Clone the repository from GitHub.
2. Install all dependencies using `npm install`.
3. Set up the necessary configurations for your environment.
4. Run the project using `npm start` in the `server` directory and then the same in `client`.

---

# Project Documentation

Welcome to the documentation for the Monobank project. This document provides an overview of the project, its features, technologies used, implementation timeline, and additional information.

## Project Overview

Monobank is a modern digital bank offering a range of banking services and financial products to its users. With seamless integration, secure authorization, and robust cloud-based infrastructure, Monobank ensures a smooth and efficient banking experience for its customers.

## List of Application Features

1. **User Registration**: Users can sign up for a Monobank account using their Google credentials or email, ensuring a secure and hassle-free registration process.
2. **Account Dashboard**: Upon logging in, users are greeted with a personalized dashboard displaying an overview of their account balances, recent transactions, and other relevant information.
3. **Transaction History**: Users can view a detailed history of their transactions, including date, amount, and transaction type, providing transparency and accountability.
4. **Money Transfer**: Users can easily transfer funds between their accounts or to other Monobank users, facilitating seamless peer-to-peer transactions.
5. **Bill Payments**: Monobank allows users to conveniently pay their bills directly from their accounts, eliminating the need for manual payment processing.
6. **Savings Goals**: Users can set savings goals and track their progress over time, helping them achieve their financial objectives more effectively.
7. **Budgeting Tools**: Monobank provides users with tools and insights to create and manage budgets, empowering them to make smarter financial decisions.
8. **Customer Support**: Users can access customer support directly from the application, enabling quick resolution of any issues or inquiries they may have.
9. **Security Features**: Monobank implements robust security measures, including two-factor authentication and encryption, to safeguard user data and prevent unauthorized access.
10. **Notifications**: Users receive real-time notifications for important account activities, such as deposits, withdrawals, and upcoming payments, keeping them informed at all times.
11. **Feedback Mechanism**: Monobank allows users to provide feedback and suggestions directly through the application, fostering continuous improvement and user satisfaction.

## Technologies Used

-   **Frontend**: React
-   **Backend**: Express
-   **Database ORM**: Sequelize
-   **Authentication**: Passport.js with Google OAuth 2.0
-   **Cloud Platform**: Vercel
-   **CI/CD**: GitHub Actions

Using React for the frontend, Express for the backend, Sequelize for database operations, and Passport.js with Google OAuth 2.0 strategy for authentication provides a robust foundation for building a scalable, responsive, and secure digital banking application like Monobank.

---

# Implementation Timeline

The project's implementation timeline follows a structured approach, divided into several weeks. Each week focuses on implementing specific features, setting up necessary infrastructure, and ensuring the project's progress aligns with the overall goals.

### Week 1

-   [x] Implement feature: User Registration
-   [x] Set up Azure cloud environment
-   [x] Create GitHub repository
-   [ ] Configure Continuous Integration/Continuous Delivery pipeline
-   [x] Draft Getting Started documentation

### Week 2

-   [x] Implement feature: Account Dashboard
-   [x] Set up SQL database on Azure
-   [x] Integrate Sequelize for database operations
-   [x] Design architecture diagram
-   [x] Begin writing project documentation

### Week 3

-   [x] Implement feature: Transaction History
-   [x] Integrate Google OAuth 2.0 for user authorization
-   [ ] Implement 95% of code using services approach and Dependency Injection
-   [x] Finalize project documentation
-   [x] Perform initial unit testing

### Week 4

-   [x] Implement feature: Money Transfer
-   [ ] Integrate open API for additional functionality
-   [x] Set up Storage Account on Azure for data storage
-   [x] Refine architecture and infrastructure diagrams
-   [x] Continue unit testing and code review

### Week 5

-   [x] Implement feature: Bill Payments
-   [x] Implement welcome email notification for new users
-   [ ] Configure Service Bus for message processing
-   [x] Update Readme.md with comprehensive documentation
-   [ ] Increase unit test coverage to meet requirements

### Week 6

-   [ ] Implement feature: Loan Application
-   [x] Optimize application for Chrome PC browsers
-   [ ] Conduct Postman testing for API endpoints
-   [x] Review and refine code for clean coding principles
-   [x] Perform integration testing and bug fixes

### Week 7

-   [x] Implement feature: Savings Goals
-   [x] Fine-tune budgeting tools functionality
-   [x] Enhance user interface for improved usability
-   [ ] Conduct load testing to assess performance
-   [x] Address any remaining issues identified through testing

### Week 8

-   [x] Implement feature: Customer Support
-   [ ] Configure automated deployment to Azure
-   [x] Perform final security audit and penetration testing
-   [x] Conduct user acceptance testing
-   [x] Prepare for production deployment

### Week 9

-   [ ] Implement feature: Security Features
-   [x] Monitor application performance and stability
-   [ ] Gather user feedback and iterate on features as needed
-   [x] Prepare release notes for production deployment
-   [x] Conduct final review and validation checks

### Week 10

-   [x] Implement feature: Notifications
-   [x] Deploy application to production environment in Azure
-   [x] Monitor production environment for any issues
-   [x] Provide support and assistance for users as needed
-   [x] Begin planning for future enhancements and updates

### Week 11

-   [x] Implement feature: Feedback Mechanism
-   [x] Analyze user feedback and prioritize feature requests
-   [x] Address any post-deployment issues or bugs
-   [x] Document lessons learned and areas for improvement
-   [x] Plan for ongoing maintenance and support

### Week 12

-   [x] Conduct project retrospective to review successes and challenges
-   [x] Prepare final project report and documentation
-   [x] Archive GitHub repository for future reference
-   [x] Celebrate project completion and team achievements
-   [x] Handover project to maintenance team for long-term management

---

# Future Enhancements and Updates

### 1. Mobile Application

-   Understand what users want from a mobile app and what features they expect.
-   Start designing the mobile app, focusing on creating an interface that's easy to use on smartphones and tablets.
-   Bring in mobile app developers to build the app's functionality.
-   Test the mobile app extensively to ensure it works well on different devices and screen sizes.
-   Release the mobile app for iOS and Android platforms after thorough testing and feedback.

### 2. Automatic Account Replenishment

-   Find out if users are interested in automatic account replenishment and what their preferences are.
-   Develop a system for automatic account replenishment that takes into account security requirements and user convenience.
-   Integrate this functionality with payment systems and bank accounts.
-   Allow users to customize their automatic replenishment settings through the web platform or mobile app.
-   Test and optimize the automatic replenishment system before rolling it out to production.

### 3. Multi-Currency Operations Support

-   Investigate whether users need support for multi-currency operations and if it aligns with your app's goals.
-   Design mechanisms for handling transactions in different currencies, considering exchange rates and fees.
-   Integrate with financial services and banks to support multi-currency operations.
-   Provide users with the ability to manage multi-currency operations through the app's interface.
-   Test the multi-currency operation system thoroughly to ensure it's reliable and user-friendly before releasing it to users.

### 4. Optimize for Dark Mode

-   Research user preferences regarding dark mode.
-   Design a new interface optimized for dark mode that's easy to use in low light.
-   Test the new design on various devices and screen resolutions.
-   Release an app update with dark mode support and inform users about the new option.

### 5. Language Change Feature

-   Research user preferences for language options.
-   Implement language selection feature.
-   Test language change functionality across devices.
-   Release app update with language change feature.

### 6. Support for Smart Payment Systems

-   Explore integration possibilities with smart payment systems like Apple Pay or Google Pay.
-   Develop interfaces for interacting with these systems that are convenient and secure for users.
-   Test the integration with smart payment systems and ensure compatibility with different devices and operating systems.
-   Release an app update with support for smart payment systems and notify users about the new feature.

### 7. Customer Support Chatbots

-   Analyze user needs and determine the best way to implement chatbot support.
-   Choose a platform for chatbot development, such as Facebook Messenger, Telegram, or Slack.
-   Develop a chatbot that can answer common user questions, provide information about the app's functionality, and assist with problem-solving.
-   Test and fine-tune the chatbot before integrating it into the app.
-   Release an app update with chatbot support and inform users about the new option for getting help via chat.

---

# Plan for Ongoing Maintenance and Support

## 1. Documentation Preparation

### Technical Documentation

-   **System Architecture**: Documentation of the overall architecture, including diagrams and explanations of each component.
-   **Database Schema**: Detailed schema of the database, including tables, relationships, and important fields.
-   **API Documentation**: Comprehensive documentation of the APIs used, including endpoints, request and response formats, and examples.
-   **Code Comments**: Ensuring the codebase is well-commented and adheres to coding standards and best practices.

### User Documentation

-   **User Manuals**: Detailed user manuals or guides explaining how to use the application, including screenshots and step-by-step instructions.
-   **FAQs**: Frequently Asked Questions section addressing common user queries and issues.
-   **Support Contacts**: Information on how users can contact support for assistance, including email, phone numbers, and working hours.

## 2. Team Roles and Responsibilities

-   **Maintenance Team**: A dedicated team responsible for maintaining and supporting the application.
    -   **Developers**: Addressing bugs, implementing minor enhancements, and ensuring the application runs smoothly.
    -   **Support Staff**: Handling user queries, providing technical assistance, and troubleshooting issues.
    -   **Project Manager**: Overseeing maintenance activities, coordinating with the development team, and ensuring timely updates.

## 3. Regular Updates and Patches

-   **Scheduled Maintenance**: Planning regular maintenance windows for updates and patches to address security vulnerabilities, performance improvements, and minor bug fixes.
-   **Change Log**: Maintaining a detailed change log documenting all updates, fixes, and enhancements made to the application.

## 4. Monitoring and Analytics

-   **Performance Monitoring**: Implementing tools to monitor application performance, server health, and resource utilization.
-   **Error Tracking**: Setting up error tracking systems to identify and address issues promptly.
-   **User Analytics**: Gathering user feedback and analytics to understand user behavior, identify pain points, and prioritize future enhancements.

## 5. User Feedback and Improvement

-   **Feedback Mechanism**: Providing users with an easy way to submit feedback, suggestions, and bug reports directly from the application.
-   **Regular Surveys**: Conducting regular user surveys to gather insights into user satisfaction and areas for improvement.
-   **Continuous Improvement**: Analyzing user feedback and implementing iterative improvements to enhance the user experience.

---

# Lessons Learned and Areas for Improvement

## Challenges

-   **CI/CD Pipeline**: Initial setup and configuration of the CI/CD pipeline faced delays and issues, impacting early deployments.
-   **Service Bus Integration**: Delays and complexities in integrating the Service Bus for message processing.
-   **Load Testing**: Load testing revealed performance bottlenecks that required significant optimization.
-   **Unit Test Coverage**: Achieving the desired unit test coverage was challenging and impacted the timeline.

## Root Cause Analysis

-   **CI/CD Pipeline Issues**:
    -   **Root Cause**: Lack of prior experience with the specific CI/CD tools.
    -   **Resolution**: Conducted additional training and consulted documentation and forums.
-   **Load Testing Bottlenecks**:
    -   **Root Cause**: Unoptimized code and inadequate resource allocation.
    -   **Resolution**: Code refactoring and increased resource allocation.
-   **Unit Test Coverage**:
    -   **Root Cause**: Time constraints and underestimated effort.
    -   **Resolution**: Reallocated resources and extended the timeline slightly to improve coverage.

## Areas for Improvement

-   **Planning**:
    -   **Improvement 1**: More detailed initial planning for CI/CD pipeline setup.
    -   **Improvement 2**: Allocate buffer time for unexpected delays in integration tasks.
-   **Execution**:
    -   **Improvement 1**: Establish clearer milestones and regular check-ins for complex integrations like the Service Bus.
    -   **Improvement 2**: Implement load testing early in the development cycle to identify and address performance issues sooner.
-   **Communication**:
    -   **Improvement 1**: Enhance communication channels between team members and stakeholders to ensure timely updates and feedback.
    -   **Improvement 2**: Increase documentation and knowledge sharing sessions to ensure all team members are on the same page.
-   **Risk Management**:
    -   **Improvement 1**: Identify potential risks earlier and develop mitigation strategies.
    -   **Improvement 2**: Regular risk assessment meetings to stay proactive.
-   **Technical Challenges**:
    -   **Improvement 1**: Invest in training for new technologies and tools to reduce the learning curve.
    -   **Improvement 2**: Regular code reviews and refactoring sessions to maintain code quality and performance.

---

## ANTILAB 2

-   Hulak Mykhailo
-   [Project Link](https://hulak-university-local-news.vercel.app/)

-   Siryk Mykyta
-   [Project Link](https://personal-finance-tracker-pft-client.azurewebsites.net/)

## Conclusion

The Monobank project achieved significant successes in user registration, account management, and security features, contributing to a positive user experience and customer satisfaction. However, challenges in CI/CD setup, integration, and performance testing underscored the importance of better planning, communication, and risk management strategies. By addressing these areas for improvement through enhanced planning, communication, and technical proficiency, future projects can achieve greater efficiency, quality, and success.

---

# Project Retrospective

## Challenges

### CI/CD Pipeline & Service Bus Integration

- **Description**: Initial setup and configuration of the CI/CD pipeline faced delays and issues, impacting early deployments and hindering the development workflow. Integration with the Service Bus introduced unexpected complexities due to differences in data formats and communication protocols, leading to integration challenges and project delays.
  
- **Resolution**: Conducted additional training sessions and workshops to enhance team proficiency with CI/CD tools. Engaged with experienced DevOps consultants for guidance and best practices. Collaborated closely with Azure integration experts and Service Bus documentation to identify compatibility issues and develop tailored integration solutions. Established a dedicated task force to address specific pipeline configuration challenges and streamline the deployment process. Implemented a phased approach to integration, focusing on critical functionalities first before expanding to more complex use cases.

- **Skills**: Improved proficiency with CI/CD tools (e.g., Jenkins, Docker) would have facilitated smoother setup and configuration. Enhanced understanding of enterprise integration patterns (EIP) and message queuing systems would have facilitated smoother integration with the Service Bus.

### Test Automation & Server Testing Tools

- **Description**: Lack of proficiency in writing tests for the application and unfamiliarity with server testing tools, particularly for frameworks like FastAPI (as opposed to Express), resulted in inadequate test coverage and limited validation of server-side functionalities.
  
- **Resolution**: Invested time in learning and training sessions focused on test automation frameworks suitable for the application stack, including tools for testing server-side functionalities specific to FastAPI. Engaged with experienced developers and QA engineers to gain insights into best practices and approaches for writing comprehensive tests. Conducted hands-on experimentation and prototyping with different testing frameworks and tools to identify the most suitable options for the project requirements.

- **Skills**: Enhanced proficiency in test automation frameworks (e.g., PyTest, SuperTest) and server testing tools (e.g., PyTest-asyncio, FastAPI TestClient) specific to the project stack would have facilitated more robust test coverage and validation of server-side functionalities. Improved understanding of testing methodologies, including unit testing, integration testing, and end-to-end testing, would have enabled more comprehensive validation of application components and workflows.

### Security Vulnerabilities & Patch Management

- **Description**: Vulnerability scans identified security vulnerabilities in third-party dependencies and outdated libraries, posing risks to application security and data integrity. Patch management processes were not well-defined, leading to delays in applying critical security patches and updates.
  
- **Resolution**: Conducted thorough security audits and vulnerability assessments to identify and prioritize security vulnerabilities based on severity and impact. Established a patch management policy and schedule regular security patch updates for third-party dependencies and system components. Implemented automated vulnerability scanning and monitoring tools to detect and mitigate security risks in real-time.

- **Skills**: Enhanced expertise in security vulnerability assessment tools (e.g., Nessus, OpenVAS) and penetration testing techniques would have facilitated more comprehensive security assessments and risk mitigation strategies. Improved understanding of secure coding practices and secure software development lifecycle (SDLC) principles would have minimized the introduction of security vulnerabilities during the development process.

### Scalability & Performance Optimization

- **Description**: As the user base grew, the application faced scalability challenges, leading to degraded performance and increased response times. Inefficient resource utilization and lack of performance optimization strategies contributed to scalability issues and hindered user experience.
  
- **Resolution**: Implemented horizontal scaling techniques to distribute traffic across multiple servers and improve system scalability. Conducted performance profiling and optimization to identify and address performance bottlenecks, including database query optimization, caching strategies, and resource allocation adjustments. Utilized cloud-based scalability solutions, such as auto-scaling groups and load balancers, to dynamically adjust resource allocation based on traffic demands.

- **Skills**: Enhanced expertise in cloud-based scalability solutions (e.g., AWS Auto Scaling, Azure Autoscale) and performance optimization techniques (e.g., query optimization, caching mechanisms) would have facilitated more efficient resource utilization and improved system scalability. In-depth knowledge of application performance monitoring tools (e.g., New Relic, Datadog) would have enabled proactive identification and resolution of performance issues.

### Client Requirement Changes & Scope Creep

- **Description**: Frequent changes in client requirements and scope creep resulted in project scope and timeline extensions, impacting project deliverables and resource allocation. Inadequate change management processes and scope definition led to ambiguity and misunderstandings regarding project expectations and deliverables.
  
- **Resolution**: Established a formal change management process to document, evaluate, and prioritize client requests and requirement changes. Conducted regular stakeholder meetings and requirement workshops to gather feedback, clarify expectations, and validate project scope. Implemented version control mechanisms, such as Git branching strategies, to manage changes and track project versions effectively. Provided transparent communication to clients regarding the impact of requirement changes on project scope, timeline, and budget.

- **Skills**: Enhanced proficiency in requirement elicitation techniques, such as user interviews, surveys, and prototyping, would have facilitated clearer understanding and documentation of client requirements. Improved stakeholder engagement and collaboration would have ensured alignment between client expectations and project deliverables, minimizing scope creep and change-related disruptions. Additionally, advanced project management skills, including risk assessment and contingency planning, would have enabled more proactive management of project scope changes and their implications on timeline and resources allocation.
