## PDPA Compliance Checklist (Quarterly Runbook)


### Why Do We Need PDPA?
- Think of PDPA as Thailand’s “data privacy law.”.
- It protects people’s personal information (like National ID, names, phone numbers, digital signatures).
- The law says: you can’t just collect and store personal data however you want — you must:
  - Tell people why you’re collecting it.
  - Keep it safe (encryption, access control).
  - Delete it when it’s no longer needed.
  - Allow people to see or delete their own data if they ask.
- Focus is on privacy, security, consent, and data rights.
- Example: “Can we store council members’ National IDs safely? Can they delete their account?”
- Checks involve reviewing databases, storage, encryption, access controls.

👉 Without PDPA compliance: your company or the municipality could face fines or lawsuits if data is leaked or misused.



### How PDPA Audit Check Works (Simple Steps)

- List the data we store
  - Names, National IDs, phone numbers, digital signatures, meeting logs.
- Check storage security
  - Database and backups are encrypted.
  - Access is limited to the right people (no shared accounts).
- Review retention
  - Old records deleted/archived as per policy (not kept forever).
- Test user rights
  - Can we export one person’s data if they ask?
  - Can we correct or delete it if requested?
- Update documents
  - Privacy Notice, Data Protection Policy, and processing records are still current.

✅ Goal: Make sure personal information is safe, used legally, and can be managed if citizens request it.

### 1. Data Mapping & Inventory
- [ ] Review system documentation and database schema.
- [ ] List all personal data collected (e.g., name, National ID, phone, signature, meeting logs).
- [ ] Identify where each type is stored:
  - [ ] PostgreSQL tables
  - [ ] AWS S3 (documents, logs)
  - [ ] Firebase/CloudWatch logs
- [ ] Confirm purpose of each data item (meeting management, authentication, audit).

### 2. Data Flow & Security
- [ ] Verify encryption in transit → TLS 1.3 active on all APIs.
- [ ] Verify encryption at rest → AES-256 in PostgreSQL RDS and S3.
- [ ] Check AWS IAM roles and security groups → least-privilege enforced.
- [ ] Confirm secure offline storage on tablets (encrypted local DB/cache).
- [ ] Run a basic vulnerability scan on API endpoints.

### 3. Database-Level Review
- [ ] Query user tables: confirm sensitive fields (e.g., passwords) are hashed.
- [ ] Review retention rules: Is old data automatically purged?
- [ ] Check backup encryption → confirm snapshots are encrypted.
- [ ] Verify access logs → who accessed sensitive tables in the last quarter?

### 4. Access Control Audit
- [ ] Export user list (Mayor, Council, Admin).
- [ ] Remove inactive/terminated accounts.
- [ ] Check for shared or generic accounts → must be eliminated.
- [ ] Verify role-based access works correctly (e.g., Council Member cannot approve meetings).

### 5. Data Subject Rights Simulation
- [ ] Test data access request: Can you export all data for a user (e.g., council member)?
- [ ] Test data correction: Update incorrect personal data and verify audit logs.
- [ ] Test data deletion request: Delete a user’s record and confirm removal across:
  - [ ] DB
  - [ ] Cached storage
  - [ ] Logs (if legally required to delete)
- [ ] Document how each request was handled.

### 6. Policy & Documentation
- [ ] Update Record of Processing Activities (ROPA):
  - [ ] What data collected
  - [ ] Why (purpose)
  - [ ] Retention period
  - [ ] Who has access
- [ ] Review internal Data Protection Policy for any gaps.
- [ ] Ensure Privacy Notice shown in app/admin panel is up to date.
- [ ] Confirm incident response plan is in place (who to notify if a breach occurs).

### 7. Compliance Report
- [ ] Write a short Quarterly PDPA Report (2–3 pages):
  - [ ] Findings (compliant / non-compliant areas)
  - [ ] Actions taken this quarter
  - [ ] Risks identified & remediation plan
- [ ] Store the report in a secure compliance folder (for audit evidence).
- [ ] Share a summary with management/client if required.

### Example Output (Quarterly Report Summary)
- [ ] ✅ Encryption at rest & in transit confirmed
- [ ] ✅ No inactive accounts left in Admin Panel
- [ ] ⚠️ Retention policy not yet automated → recommend auto-purge after 2 years
- [ ] ✅ Data access/export tested successfully
- [ ] ⚠️ Privacy Notice outdated (last updated 2023) → update in next sprint

### Who Runs This?
- [ ] Compliance Lead (DPO) → Oversees and documents.
- [ ] DevOps/DB Engineer → Helps run DB queries, check logs, IAM roles.
- [ ] QA/Test Engineer → Simulates data subject requests.
