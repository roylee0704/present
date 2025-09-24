## AUDIT PLAN AND CHECKLIST

Reference: `docs/quotation.md`

### Purpose
Define the audit approach, scope, acceptance criteria, evidence requirements, and reporting for Security, Compliance, Performance, and Audit Trail, aligned with the Government Meeting Management project.

### Objectives
- Validate security posture and proactively reduce risk.
- Demonstrate legal compliance (PDPA, ETA, Cybersecurity Act).
- Confirm system performance meets user-facing SLOs (documents <3s; signatures <1s).
- Ensure tamper-evident auditability of key actions (approvals, signatures).

### In-Scope Systems
- Flutter tablet app (iOS 14+ / Android 8+)
- Backend TypeScript APIs (Auth, Meetings, Documents, Users)
- AWS infrastructure (RDS PostgreSQL, S3 + CloudFront, WAF, CI/CD, networking)
- Admin panel (Next.js)
- Firebase (notifications/analytics)

### Roles & Responsibilities
- Titan AI: environment access, approvals, remediation ownership
- ThoughtWorks: audit execution, reporting, retest verification
- Joint: risk acceptance, change window scheduling

### Schedule (aligned to quotation milestones)
- Weeks 1–3: Baseline security & compliance readiness review
- Weeks 4–10: Ongoing scans, interim penetration tests, performance baselines
- Weeks 11–16: Final audits, remediation verification, sign-off

---

## 1) Security Audit

#### Scope
- External and internal attack surfaces for APIs, web admin, and mobile apps
- Cloud configuration (IAM, network, storage, WAF) and CI/CD security
- Dependency and OS patch levels

#### Activities
- Vulnerability scanning: automated scans of servers, APIs, mobile apps
- Patch verification: OS, database, runtime, and dependency updates
- Penetration testing: black/grey-box tests across OWASP Top 10 (Web/Mobile/API)
- Access control review: least privilege for IAM, DB, and application roles

#### Methods & Tools
- Web/API: OWASP ZAP or Burp Suite; Postman/Newman for API workflows
- Mobile: MobSF static/dynamic analysis; Play Integrity/App Transport Security checks
- Dependencies/Containers: Snyk/Trivy; npm/yarn audit; Gradle Cocoapods checks
- Cloud: AWS IAM Access Analyzer, Trusted Advisor, Security Hub, GuardDuty

#### Evidence to Collect
- Scan reports, pen test findings, PoC payloads (sanitized)
- IAM policy diffs, least-privilege matrices, WAF rulesets
- Patch level reports (OS, DB, runtimes, libraries)

#### Acceptance Criteria
- No Critical findings open; High findings remediated or with approved compensating controls
- 0 known exploitable vulnerabilities on internet-exposed assets
- MFA enforced for all privileged access; secrets rotated; no hardcoded secrets

---

## 2) Compliance Audit

#### Applicable Standards
- PDPA (Thai Personal Data Protection Act)
- ETA (Electronic Transactions Act)
- Cybersecurity Act minimum standards for government workloads

#### PDPA Controls (examples)
- Lawful basis recorded; consent (if used) captured and auditable
- Data minimization for National ID, biometrics, signatures; purpose limitation
- Data subject rights: access, rectification, deletion, objection workflows
- Security measures: encryption in transit (TLS 1.2+), at rest (RDS, S3 SSE)
- Retention & deletion: policy, scheduler, and verifiable deletion logs
- Processor/Controller roles defined; records of processing activities (RoPA)

#### ETA Electronic Signature Reliability
- Signatures linked to signer identity and protected against alteration
- Time-stamping with secure, synchronized time source (NTP, CloudWatch)
- Document integrity: hash of signed payload stored and verified on retrieval
- Signature event recorded in immutable audit trail with signer context

#### Cybersecurity Act Alignment
- Account & access management: least privilege, MFA, key rotation
- Network protections: WAF, security groups, private subnets for data stores
- Monitoring: Security Hub, GuardDuty, CloudTrail, centralized logs
- Backup & recovery: RDS automated backups, tested restore procedures

#### Evidence to Collect
- Policies (privacy, retention), RoPA, DPA, DPIA (if applicable)
- Key management configs, encryption settings, TLS test results
- Signature verification logs, hash match records, timestamp proof

#### Acceptance Criteria
- No material PDPA gaps; data rights processes demonstrable end-to-end
- ETA signature reliability requirements demonstrably met
- Cybersecurity Act minimums satisfied with documented controls

---

## 3) System Performance Audit

#### Target SLOs (from quotation)
- Document load time: < 3 seconds (P95)
- Signature capture and submission: < 1 second (P95)

#### Activities
- Server load testing: peak concurrent usage (e.g., council meeting scenarios)
- Database optimization: indices, slow query analysis, connection pooling
- App performance: cold/warm start, offline cache behavior, large document handling

#### Methods & Tools
- Load: k6 or JMeter scripted against primary user journeys
- DB: pg_stat_statements, EXPLAIN ANALYZE, RDS Performance Insights
- App: Flutter DevTools, profiling traces; Web admin via Lighthouse

#### Evidence to Collect
- Test plans, datasets, and scripts; environment specs; run logs
- Performance dashboards, query plans, before/after metrics

#### Acceptance Criteria
- Meets or exceeds SLOs at projected peak concurrency (with 20% headroom)
- No P95 API latencies breaching target thresholds during 30-minute sustained load
- No error rate spikes > 1% during tests; graceful degradation documented

---

## 4) Audit Trail Review

#### Scope
- All critical actions: logins, approvals, rejections, signature events, role changes, document lifecycle events

#### Controls
- Log integrity: append-only, tamper-evident (hash-chained or WORM-like retention)
- Traceability: who, what, when, where (IP/device), and context captured
- Time synchronization: consistent UTC timestamps, drift monitored
- Retention & access: role-based access to logs, retention policy applied

#### Methods & Tools
- Centralized logging: CloudWatch Logs, CloudTrail, optional S3 + Object Lock (WORM)
- Integrity: periodic hash verification or ledger table with hash chain
- Alerting: anomalies on admin actions, failed signatures, bulk downloads

#### Evidence to Collect
- Sample log excerpts for each critical action with correlation IDs
- Integrity verification reports or ledger reconciliation outputs

#### Acceptance Criteria
- Complete, immutable, and queryable audit trail across all critical actions
- Successful integrity verification over sampled periods

---

## Reporting & Deliverables
- Executive report: summary of findings, risk ratings, and remediation plan
- Technical appendices: scan outputs, test scripts, configs, and proofs
- Compliance matrix: PDPA/ETA/Cybersecurity Act mapping to implemented controls
- Sign-off memo: acceptance of remediations and residual risks (if any)

## Remediation & Re-Test
- Critical: fix before go-live; re-test required
- High: fix before go-live or implement compensating controls with explicit risk acceptance
- Medium/Low: scheduled post-launch with defined owners and dates

## Data Handling & Confidentiality
- All artifacts classified as Confidential; store in secured repo/bucket
- Sensitive logs and datasets minimized or redacted; share via approved channels

---

## Checklists (Condensed)

### Security
- [ ] Internet-exposed endpoints scanned; no Criticals; Highs addressed
- [ ] MFA for privileged accounts; least privilege enforced
- [ ] Secrets managed (no hardcoding); rotations verified
- [ ] WAF rules active; anomaly alerting configured

### Compliance
- [ ] PDPA rights workflows demonstrable; retention jobs in place
- [ ] ETA signature hash, linkage, and timestamp verified
- [ ] Encryption at rest/in transit verified; KMS policies reviewed

### Performance
- [ ] Load tests achieve SLOs with 20% headroom
- [ ] DB slow queries optimized; indexes validated
- [ ] App P95 metrics within targets on supported devices

### Audit Trail
- [ ] Immutable log storage or hash-chaining implemented
- [ ] Coverage of all critical actions validated
- [ ] Time sync and log correlation confirmed

---

## Appendix A: Sample Test Scenarios
- Mayor approves a large agenda with attachments (peak concurrency)
- Council members submit responses simultaneously (read/write contention)
- Offline document access and later sync for 500MB cache per user
- Signature capture under degraded network; integrity verification upon upload

## Appendix B: Report Template (Outline)
1. Executive Summary
2. Scope and Methodology
3. Findings and Risk Ratings
4. Compliance Matrix (PDPA/ETA/Cybersecurity Act)
5. Performance Results and SLO Compliance
6. Audit Trail Integrity Results
7. Remediation Plan and Owners
8. Sign-off


