# QUOTATION

**Government Meeting Management Mobile Application**

---

**From:** Titan AI Co., Ltd
**Date:** September 24, 2025
**Quote Reference:** TW-TITAN-2025-001
**Validity:** 30 days from date of issue

---

## Executive Summary

Titan Ai is pleased to propose a **cost-optimized MVP solution** for the Government Meeting Management Mobile Application project. This streamlined solution delivers immediate value to council members through a secure, tablet-optimized Flutter application that eliminates paper-based processes and provides instant digital access to meeting materials. **This MVP achieves 75% cost savings** compared to the comprehensive solution while maintaining core functionality and quality standards.

**Total Project Investment:** THB 500,000 (Five Hundred Thousand Thai Baht)
**Project Duration:** 8-10 weeks (2-2.5 months)
**Delivery Method:** Agile development with weekly sprints and milestone-based delivery
**Cost Savings:** 75% reduction from comprehensive 2M THB scope

---

## Project Scope & Deliverables

### MVP Focus: Council Members First

This 500K THB MVP focuses exclusively on delivering immediate value to council members:
- ✅ **Instant access** to approved meetings (no postal delays)
- ✅ **Superior tablet-optimized** document viewing experience
- ✅ **Reliable offline access** during meetings (500MB cache per user)
- ✅ **Simple digital signature** workflow for acknowledgments
- ✅ **Push notifications** for new meetings and updates
- ❌ Mayor approval workflow **deferred to Phase 2**
- ❌ Advanced analytics **deferred to Phase 2**
- ❌ Enterprise AWS infrastructure **replaced with Supabase Pro**

---

### 1. Flutter Tablet Application (Council Member Focus)
**Investment Allocation:** THB 250,000 (50%)

**Core Features:**
- **Secure Authentication System** with Thai National ID format validation (9 9999 99999 99 9)
- **Council Member Events Dashboard** with Upcoming/Past tabs and status indicators
- **Meeting Details View** with comprehensive meeting information and document lists
- **Digital Signature Capture System** optimized for tablets with finger-based input
- **Meeting Acknowledgment Workflow** with one-tap acknowledgment and signature
- **Attendance Response System** (Going/Declined) with digital signature capture
- **Document Management System** supporting PDF, Word, Excel, and images
  - Tablet-optimized viewing with zoom, scroll, and pan controls
  - Document download progress indicators
  - Offline access confirmation
- **Offline Document Access** with automatic download and cache management
  - Up to 500MB cache per user (10-15 upcoming meetings)
  - WiFi-preferred download strategy
  - Auto-delete past meetings older than 30 days
- **Calendar Integration** with "Add to Calendar" functionality
- **Profile Management** with password change and app information
- **Push Notification System** via Firebase Cloud Messaging (FCM)
  - New meeting assignments
  - Meeting updates and changes
  - 24-hour meeting reminders

**Platform Support:**
- iOS (iPad) 14+ optimized for 10.2" and 12.9" displays
- Android 8.0+ tablets (minimum 10" screen)
- Landscape and portrait support

**Performance Requirements:**
- Document loading: <3 seconds (files up to 50MB)
- Signature capture: <1 second response time
- App launch: <2 seconds
- Offline access: Instant (no network delay)

---

### 2. Backend API Development (NestJS + Supabase)
**Investment Allocation:** THB 125,000 (25%)

**Complete API Services:**
- **Authentication Service** with Thai National ID validation and JWT management
- **Meeting Workflow API** with single-stage approval (Admin creates → Council members notified)
  - Meeting CRUD operations
  - Council member assignment
  - Status tracking (Draft, Published, Completed)
  - Acknowledgment and attendance response recording
- **Document Management API** with Supabase Storage integration
  - Secure file upload with validation (PDF, Word, Excel, images)
  - 50MB file size limit enforcement
  - Secure URL generation with expiration
  - Download tracking for offline access
- **User Management API** with role-based access control
  - Individual user registration and profile management
  - Admin-generated passwords with first-time change enforcement
  - Basic audit trail for compliance
- **Push Notification Service** with Firebase Cloud Messaging integration
  - Device token registration
  - Notification dispatch for meeting events
  - Delivery status tracking

**Technology Stack:**
- **Framework:** NestJS (Node.js with TypeScript)
- **ORM:** Prisma (type-safe database client)
- **Database:** Supabase PostgreSQL
- **Session Storage:** JWT tokens (no Redis needed for 50-60 users)
- **File Storage:** Supabase Storage (200GB/month egress)
- **Documentation:** OpenAPI 3.0 with Swagger UI
- **Testing:** Jest with NestJS testing utilities

---

### 3. Admin Panel Development (Minimal Web Interface)
**Investment Allocation:** THB 125,000 (25%)

**Essential Admin Features:**
- **Meeting Management Interface**
  - Simple meeting creation form with document upload
  - Council member selection (multi-select)
  - One-click "Publish" to distribute meetings
  - Meeting list with filtering (Draft, Published, Completed)
  - Edit and delete functionality
- **Meeting Status Dashboard**
  - Real-time acknowledgment tracking (e.g., "12/15 acknowledged")
  - Going/Declined counts per meeting
  - CSV export for government reporting
- **User Management System**
  - Add new users with auto-generated passwords
  - Edit user details (name, role)
  - Password reset functionality
  - User activity log (last login, acknowledgments)
- **Document Management**
  - Document upload during meeting creation
  - Preview before publishing
  - File size and type validation
  - Storage usage monitoring
- **Admin Authentication** with session management and password change

**Technology Stack:**
- **Frontend:** Next.js 14+ with React 18 and TypeScript
- **Styling:** Tailwind CSS with Shadcn/ui component library
- **State Management:** Zustand + React Query
- **Accessibility:** WCAG 2.1 Level AA compliance

---

### 4. Supabase Cloud Infrastructure
**Included in development cost**

**Complete Cloud Architecture:**
- **Supabase Pro Hosting** with PostgreSQL database
- **Supabase Storage** for document hosting (200GB/month egress)
- **Automatic Backups** with daily automated backups
- **SSL/TLS** automatic HTTPS for all connections
- **Firebase Integration** for push notifications (FCM), analytics, and crash reporting
- **Development & Deployment:**
  - GitHub repository with CI/CD pipeline (GitHub Actions)
  - Development, Staging, Production environments
  - Monitoring via Supabase dashboard + Firebase console

**Monthly Infrastructure Cost (Client Responsibility):**
- Supabase Pro: ~4,000 THB/month
- Firebase Services: ~1,000 THB/month (free tier likely sufficient)
- **Total: ~4,000-5,000 THB/month (~48,000-60,000 THB/year)**

---

### 5. Testing, Security & Compliance
**Included in development cost**

**Security Architecture:**
- HTTPS/TLS 1.3 for all data transmission
- Encryption at rest (AES-256) and in transit
- JWT-based authentication with 30-minute expiration
- Role-based access control (Council Member, Admin)
- API rate limiting (100 requests/minute per user)
- Basic audit logs with 90-day retention

**Testing & Quality Assurance:**
- Integration testing of complete workflows
- Cross-device testing (iPad, Android tablets)
- Performance testing (document loading, offline access)
- Security testing (authentication, authorization, encryption)
- User Acceptance Testing (UAT) with stakeholders

---

## Project Timeline & Milestones

### Phase 1: Infrastructure & Foundation (Weeks 1-2)
**Milestone Payment:** THB 200,000 (40%)

**Week 1: Setup & Architecture**
- Supabase project setup and configuration
- Firebase project setup (FCM + Analytics + Crashlytics)
- GitHub repository and CI/CD pipeline (GitHub Actions)
- Database schema design and initial migration scripts
- Development environment setup

**Week 2: Core Backend Development**
- NestJS project setup with modular architecture
- Prisma schema definition and initial migration
- Authentication module (Thai ID validation, JWT with Passport)
- User management module (CRUD operations)
- Database seeding with test data

**Deliverables:**
- ✅ Supabase PostgreSQL database with Prisma schema
- ✅ NestJS application with authentication and user modules
- ✅ Firebase project configured for push notifications
- ✅ GitHub Actions CI/CD pipeline

---

### Phase 2: Backend API & Mobile App Development (Weeks 3-6)
**Milestone Payment:** THB 200,000 (40%)

**Weeks 3-4: Backend API Completion**
- Meeting module (CRUD operations with Prisma)
- Document module with Supabase Storage integration
- Notification module with Firebase FCM
- API integration testing with Jest
- OpenAPI/Swagger documentation

**Weeks 4-6: Flutter Mobile App**
- Flutter project setup (tablet-optimized)
- Authentication screens and workflows
- Events dashboard (Upcoming/Past tabs)
- Meeting details and document viewing
- Digital signature capture
- Offline caching system (500MB limit)
- Push notification handling

**Deliverables:**
- ✅ Complete NestJS RESTful API operational
- ✅ Flutter app functional on iOS and Android tablets
- ✅ Document viewing and offline access working
- ✅ Push notifications integrated

---

### Phase 3: Admin Panel & Testing (Weeks 5-8)
**Final Payment:** THB 100,000 (20%)

**Weeks 5-6: Admin Panel Development**
- Meeting creation and publishing interface
- User management system
- Status dashboard with CSV export
- Responsive design for tablet access

**Weeks 7-8: Testing & Quality Assurance**
- Integration testing of complete workflows
- Cross-device testing (iPad, Android tablets)
- User Acceptance Testing (UAT)
- Bug fixing and refinements
- Security compliance validation

**Deliverables:**
- ✅ Admin panel deployed and functional
- ✅ All critical bugs resolved
- ✅ UAT sign-off from stakeholders
- ✅ User documentation completed

---

### Phase 4: Deployment & Launch (Weeks 9-10)
**Included in final payment**

**Week 9: Production Deployment**
- Production Supabase environment setup
- Mobile app submission to App Store and Google Play
- Admin panel deployment to production domain
- SSL certificate and domain configuration
- Production monitoring setup

**Week 10: Launch & Training**
- User training for council members (2-hour workshop)
- Admin training for government staff (2-hour workshop)
- Go-live support (daily check-ins)
- Performance monitoring
- Knowledge transfer documentation

**Deliverables:**
- ✅ Mobile app live on App Store and Google Play
- ✅ Admin panel accessible at production URL
- ✅ Users trained and onboarded
- ✅ 1-week post-launch support active

---

## Titan Ai Value Proposition

### Cost-Optimized MVP Excellence
- **75% Cost Savings:** Deliver immediate value at 500K THB vs 2M THB comprehensive solution
- **Faster Time to Value:** 8-10 weeks vs 15-16 weeks for full scope
- **Council Member Focus:** Laser-focused on delivering immediate benefits to end users
- **Proven ROI Path:** Validate adoption before investing in Phase 2 expansion

### Technical Excellence
- **Modern Technology Stack:** NestJS + Prisma + Supabase + Flutter for maintainability
- **Government-Grade Security:** TLS 1.3, encryption at rest/in transit, audit trails
- **Performance Optimization:** Right-sized architecture for 50-60 concurrent users
- **Tablet-First Design:** Superior UX optimized for council member workflows

### Delivery Assurance
- **Agile Methodology:** Weekly sprint reviews with continuous client feedback
- **Quality Guarantee:** Comprehensive testing with 95% success rate commitment
- **Risk Mitigation:** MVP approach validates core functionality before major investment
- **Knowledge Transfer:** Complete documentation and operational handover

### Long-term Partnership
- **Clear Expansion Path:** Defined Phase 2 roadmap to reach comprehensive 2M THB solution
- **Scalability Planning:** Architecture designed for future Mayor workflow and analytics
- **Maintenance Support:** Optional ongoing support packages available
- **Technology Evolution:** Modern stack allows easy feature additions and upgrades

---

## Investment Summary

| Component | Investment (THB) | Percentage |
|-----------|------------------|------------|
| Flutter Tablet Application (Council Member) | 250,000 | 50% |
| Backend API Development (NestJS + Supabase) | 125,000 | 25% |
| Admin Panel Development (Next.js) | 125,000 | 25% |
| Infrastructure Setup (Supabase + Firebase) | Included | - |
| Testing & Security | Included | - |
| **Total Project Investment** | **500,000** | **100%** |

**Cost Comparison:**
- **Original Comprehensive Scope:** 2,500,000 THB (15-16 weeks)
- **MVP Scope (This Quotation):** 500,000 THB (8-10 weeks)
- **Savings:** 2,000,000 THB (75% reduction)

---

## Payment Terms

**Milestone-Based Payment Schedule:**
- **40% upon contract signing and project initiation:** THB 200,000
- **40% upon core functionality completion (Week 6):** THB 200,000
  - Mobile app + API + Admin panel functional
  - Demonstration of key workflows
- **20% upon final delivery and acceptance (Week 10):** THB 100,000
  - Production deployment complete
  - UAT sign-off received
  - User training completed

**Payment Methods:** Bank transfer or company check
**Currency:** Thai Baht (THB)
**Tax:** All prices are exclusive of applicable VAT (7%)

**Infrastructure Costs (Client Responsibility, Not Included):**
- Monthly hosting: ~4,000-5,000 THB/month (Supabase Pro + Firebase)
- Annual infrastructure: ~48,000-60,000 THB/year
- Domain & SSL: ~2,000 THB/year
- App store fees: ~4,400 THB/year

---

## Terms & Conditions

### Project Scope
This quotation covers all deliverables specified in the referenced scope of work document. Any additional requirements or scope changes will be subject to separate change requests and pricing.

### Timeline Commitment
Titan Ai commits to delivery within the specified 8-10 week timeline, subject to timely client feedback and approvals at milestone reviews.

### Warranty & Support
- **90-day warranty** on all deliverables from acceptance date
- **1-week post-launch support** included in project price (Week 10)
- **Bug fixes and critical issues** resolved at no charge during warranty period

#### Optional Annual Maintenance & Support Packages

*(Applicable for 500K THB MVP Scope)*

##### 1. Standard Package (18% of Project Cost)
**Annual Fee:** THB 90,000

**Scope of Coverage:**
- Bug fixes & defect resolution (business hours)
- Compatibility updates (iOS/Android OS, browser versions)
- Security patching (quarterly releases)
- Minor configuration changes (up to 5 per year)
- Quarterly system health check & performance report
- Email & phone support (business hours, Mon–Fri, 9–5)

**Service Level Agreement (SLA):**
- Response time: within 8 business hours
- Resolution time: within 5 business days for critical issues

##### 2. Premium Package (24% of Project Cost)
**Annual Fee:** THB 120,000

**Everything in Standard, plus:**
- Priority support with extended hours (Mon–Sat, 8–8)
- Faster turnaround on fixes & patches
- Semi-annual security audits
- OS & device upgrades guaranteed within 30 days of release
- Performance tuning (1 optimization cycle per year)
- Minor enhancements (up to 10 change requests per year)
- Training refreshers for government staff (1 session annually)

**SLA:**
- Response time: within 4 hours (business days)
- Resolution time: within 72 hours for critical issues

##### 3. Enterprise SLA Package (30% of Project Cost)
**Annual Fee:** THB 150,000

**Everything in Premium, plus:**
- 24/7 emergency support hotline (critical issues only)
- Dedicated Technical Account Manager (TAM)
- Proactive monitoring & incident management (Supabase + Firebase)
- Unlimited minor change requests
- Annual compliance & certification support (PDPA, ETA, Cybersecurity Act)
- Priority access for Phase 2 expansion features
- Knowledge transfer & documentation updates for IT department

**SLA:**
- Response time: 2 hours (24/7 for critical issues)
- Resolution time: within 24 hours for critical issues

#### Comparison Table

| Feature | Standard (฿90k) | Premium (฿120k) | Enterprise (฿150k) |
|---------|-------------------|------------------|---------------------|
| Bug fixes & patches | ✓ | ✓ | ✓ |
| OS/Browser compatibility | ✓ | ✓ | ✓ |
| Security audits | Basic (scans) | Semi-annual | Semi-annual + Annual Compliance Report |
| Compliance checks (PDPA/ETA) | – | Light checks | Full audit support |
| Support hours | 9–5, M–F | 8–8, M–Sat | 24/7 critical |
| SLA response time (critical) | 8 hrs | 4 hrs | 2 hrs |
| Change requests | 5/year | 10/year | Unlimited |
| Training sessions | – | 1/year | 2/year |
| Phase 2 priority access | – | – | ✓ |

### Infrastructure & Ongoing Costs

#### Supabase Hosting (Client Responsibility)
- **Supabase Pro:** ~THB 4,000/month (~$25 USD/month)
  - 8GB database
  - 100GB storage
  - 200GB egress bandwidth (sufficient with caching strategy)
  - Daily automated backups
  - Client maintains direct Supabase account ownership

#### Firebase Services (Client Responsibility)
- **Firebase Cloud Messaging (FCM):** Free tier sufficient for 50-60 users
- **Firebase Analytics & Crashlytics:** Free tier sufficient
- **Potential upgrade costs:** If usage exceeds free tier (~THB 1,000/month)

#### Domain & SSL Certificates (Additional Costs)
- **Domain registration:** THB 1,500/year (.gov.th or .co.th)
- **SSL certificates:** Included with Supabase (automatic HTTPS)
- **DNS management:** THB 2,000/year (optional)

#### Mobile App Store Submissions (Additional Costs)
- **iOS App Store:** $99 USD/year (~THB 3,500)
- **Google Play Store:** $25 USD one-time (~THB 900)
- **App submission service:** THB 15,000 (includes app store optimization and initial submission)

#### Total Monthly Infrastructure Cost Estimate
- **Supabase Pro:** ~4,000 THB/month
- **Firebase (if exceeding free tier):** ~1,000 THB/month
- **Total:** ~4,000-5,000 THB/month (~48,000-60,000 THB/year)

**Note:** Infrastructure costs are significantly lower than AWS enterprise setup (80-85% reduction from original 20,000-35,000 THB/month estimate)

### Intellectual Property
All custom code and documentation will be owned by Titan AI upon final payment. Titan Ai retains rights to general methodologies and frameworks used.

---

## Phase 2 Expansion Roadmap

If the MVP succeeds and stakeholders approve additional investment, here's the path to the comprehensive 2M THB solution:

### Phase 2A: Mayor Workflow Module
**Investment:** 600,000 THB | **Duration:** 6 weeks

- Mayor mobile application for iOS/Android
- "Requests" approval dashboard
- Mayor digital signature system
- Multi-stage approval workflow (Admin → Mayor → Council)
- Rejection reasoning and workflow

### Phase 2B: Advanced Analytics & Reporting
**Investment:** 300,000 THB | **Duration:** 4 weeks

- Comprehensive analytics dashboard
- Government compliance reporting suite
- Meeting participation analytics
- Custom report builder
- Audit trail visualization

### Phase 2C: Enterprise Infrastructure Migration
**Investment:** 400,000 THB | **Duration:** 4 weeks

- Migrate from Supabase to AWS enterprise architecture
- Multi-AZ RDS PostgreSQL deployment
- Redis caching layer
- CloudFront CDN for global document delivery
- Advanced monitoring and alerting

### Phase 2D: Premium Features
**Investment:** 200,000 THB | **Duration:** 3 weeks

- Document annotation and markup tools
- Full-text search across meetings and documents
- Notification center/inbox
- User group management
- Meeting templates and bulk operations
- Multi-factor authentication (MFA)

**Total Phase 2 Investment:** 1,500,000 THB (reaching comprehensive 2M THB scope)
**Phase 2 Timeline:** 17 additional weeks (4 months)

---

## Next Steps

### Immediate Actions (Week 0)

1. **Stakeholder Sign-Off**
   - Confirm acceptance of single-stage workflow (no mayor approval in MVP)
   - Validate 500,000 THB budget approval
   - Sign off on MVP scope vs Phase 2 expansion path

2. **Technical Discovery**
   - Conduct council member device survey (tablet availability)
   - Clarify Thai National ID validation requirements
   - Validate Supabase meets government security standards

3. **Contract Execution**
   - Sign service agreement
   - Execute first milestone payment (200,000 THB)
   - Establish communication channels and weekly progress meetings

4. **Project Kickoff (Week 1, Day 1)**
   - Team introductions and kickoff meeting
   - Review MVP scope and success criteria
   - Establish sprint planning and communication protocols
   - Begin infrastructure setup (Supabase + Firebase)

---

## Contact Information

**For questions regarding this quotation:**
Email: hello@titvn.com
Phone: +66 (0) 2xxx-xxxx

---

## Conclusion

*This **500,000 THB MVP quotation** represents Titan Ai's commitment to delivering exceptional value through cost-optimized digital transformation. By focusing laser-sharp on council member needs, we achieve **75% cost savings** while maintaining quality standards and laying the foundation for future expansion.*

**Key Benefits of This MVP Approach:**
- ✅ **Immediate ROI:** 80% reduction in printing/postage costs
- ✅ **Faster Time to Value:** 8-10 weeks vs 15-16 weeks
- ✅ **Risk Mitigation:** Validate adoption before Phase 2 investment
- ✅ **Clear Expansion Path:** Defined roadmap to comprehensive 2M THB solution

*We look forward to partnering with your organization on this transformative digital government initiative that delivers immediate value while positioning for future growth.*

---

**Titan AI Co., Ltd.**
[Authorized Signature]
[Name, Title]
Date: September 24, 2025