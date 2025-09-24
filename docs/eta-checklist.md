## 📋 ETA Compliance Checklist (Quarterly Runbook)


### Why Do We Need ETA?

- Think of ETA as Thailand’s “e-signature law.”
- It makes sure that digital approvals and signatures are legally valid (same as signing on paper).
- For a signature to be accepted in court, it must be:
  - Clearly linked to the person who signed.
  - Under their control only (no one else can sign for them).
  - Tamper-proof (if the document changes after signing, it must be detectable).
  - Time-stamped and logged.
- Focus is on legal validity of digital signing and documents.
- Example: “If the Mayor approves a meeting, can we prove he actually signed it and nobody changed it after?”
- Checks involve reviewing signature process, tamper detection, timestamps, audit logs.

👉 Without ETA compliance: the Mayor’s or Council’s digital approvals could be challenged as “not legally binding.”


### How ETA Compliance Check Works (Simple Steps)

- Pick a signed document
  - Take a meeting record or approval that has a digital signature.
- Verify who signed
  - Check the system logs → make sure the signature is linked to the correct Mayor or Council Member (not a shared account).
- Check signer’s control
  - Confirm the person had to log in (with password/ID/biometric) before signing.
  - Ensure no admin can “sign on behalf” of someone else.
- Test tamper detection
  - Try to change the signed document → the system should show “invalid signature” or block the change.
- Confirm timestamp & audit log
  - Look at the signature record → does it show who signed, when, and from what device?
  - Make sure the timestamp is correct (NTP-synced).
- Check intent confirmation
  - Ensure the system asked: “Do you want to sign this document?” before applying the signature.
- Document results
  - Write down: ✔︎ Valid signature, ✔︎ Tamper-proof, ✔︎ Correct signer.
  - If anything fails (e.g., tampering goes undetected), raise it as a risk and fix it.

### 1. Signature Binding & Identity Verification

- [ ] Verify that each signature is tied to a unique user ID (Mayor, Council Member).
- [ ] Confirm that login credentials (National ID + password/biometric) are required before signing.
- [ ] Check logs to ensure no duplicate/ghost accounts exist.

### 2. Signature Creation & Control

- [ ] Confirm signature capture method (finger capture/cryptographic signing) is under the signer’s sole control.
- [ ] Review authentication settings:
  - [ ] Is MFA or biometric required?
  - [ ] No shared devices/accounts allowed.
- [ ] Verify admin accounts cannot “sign on behalf” of others.

### 3. Tamper Detection

- [ ] Open previously signed documents → verify that any post-signature modification is detected (hash mismatch, “invalid signature” warning).
- [ ] Confirm signatures are timestamped and sealed at signing.
- [ ] Check version history in document storage (S3/PostgreSQL) → ensure new versions don’t overwrite original signed files.

### 4. Time-Stamp Integrity

- [ ] Validate that the server clock (AWS/DB) is NTP-synced.
- [ ] Verify each signature log includes:
  - [ ] User ID
  - [ ] Document ID
  - [ ] Timestamp (with timezone)
  - [ ] IP/device info
- [ ] Check that signed events appear correctly in audit trail.

### 5. Audit Trail Review

- [ ] Randomly sample 5 signed documents from the last quarter.
- [ ] Confirm the audit log shows who signed, when, and on which device.
- [ ] Confirm audit logs are tamper-proof (e.g., append-only DB or CloudTrail).
- [ ] Check logs for failed/attempted signature actions (integrity of rejection logs).

### 6. Legal Validity Confirmation

- [ ] Review whether the system provides clear evidence that:
  - [ ] The signer intended to sign (e.g., “Confirm Signature” dialog).
  - [ ] The signature is linked only to that signer.
  - [ ] Any change after signing is detectable.
- [ ] Ensure digital signature mechanism aligns with reliable signature criteria in ETA.
- [ ] Confirm the municipality has an internal policy recognizing these e-signatures as official.

### 7. Quarterly ETA Compliance Report

- [ ] Document findings:
  - [ ] Are signatures unique, verifiable, tamper-proof?
  - [ ] Any gaps found (e.g., admin override, missing logs)?
- [ ] Provide sample signed document + audit log extract as evidence.
- [ ] Recommend remediation (e.g., tighten controls, fix hash validation, update logs).

### 📊 Example Report Output

- ✅ All signatures verified unique & bound to user ID
- ✅ Timestamps consistent and audit logs intact
- ⚠️ One admin account had elevated rights → removed immediately
- ✅ 5 sample signed documents validated as tamper-proof
- ⚠️ No explicit “Confirm Intent” screen before signing → add confirmation popup

### 🛠 Who Runs This?

- Compliance Lead (DPO or Legal Liaison) → Oversees legal validity.
- Backend Engineer → Verifies signature logic, tamper detection, timestamping.
- QA Tester → Samples signed documents and simulates invalid changes.

✅ With this ETA checklist + your PDPA checklist, you have a complete compliance runbook for Thai law:

PDPA → Data privacy, storage, rights.

ETA → Digital signatures, legal enforceability of e-documents.

