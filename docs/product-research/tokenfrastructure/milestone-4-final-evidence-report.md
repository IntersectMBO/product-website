---
title: "Milestone 4 Final Evidence Report"
sidebar_label: "Final Evidence Report"
sidebar_position: 23
---

![IEI logo](./assets/iei-logo.png)

# Final evidence report and recommendation

## Decision for the Product Committee

We recommend a **conditional go**. Cardano has a credible role in a small but potentially useful part of the AI agent market: services where a buyer wants payment held until agreed work is delivered, clear refund rules, and a simple record of what happened.

This is narrower than an "AI chain" strategy. The evidence does not support positioning Cardano as the leading network for machine payments, AI models, computing power or general AI applications. It also does not support claims that Cardano makes AI safe or verifies the quality of an AI result.

The strongest starting point is Masumi and Sokosumi. They already combine agent registration, escrow, refunds and service records on Cardano. They prove that the system can operate. The public data does not yet prove that independent customers are paying, returning or receiving outcomes they accept.

Cardano's main weakness is market access. Competing payment systems already reach developers through familiar software tools, wallets, stablecoins and commercial platforms. Cardano should therefore work with open standards rather than ask users to adopt a separate Cardano system.

The Product Committee should only consider implementation funding after three practical tests:

1. Independent buyers confirm that the problem matters and commit to a paid test.
2. An external developer shows that the Cardano service can connect to existing payment, wallet and authorization systems without excessive work.
3. A buyer, auditor or risk owner confirms that the Cardano record helps them make a real payment, risk or dispute decision.

In this report, **conditional settlement** means that funds are released only when agreed conditions are met. A **receipt** means a small, tamper-evident record of the authority, payment and outcome references needed for a later check or dispute. These terms do not imply that the blockchain can judge whether an AI answer is correct.

## What the study covered

The study examined the commercial case for Cardano in AI agent services. It asked:

- Is there a real buyer problem?
- Does the problem require blockchain infrastructure?
- Does Cardano offer something useful compared with existing alternatives?
- Can Cardano reach the relevant buyers and delivery partners?
- What evidence would justify further investment?

The work covered market demand, buyer requirements, Cardano's technical fit, current activity, competing solutions, priority use cases and routes to market. It also tested the claims that Cardano could credibly make to different audiences.

The work did not include product development, a pilot, a full technical audit, a general Cardano brand study or a stablecoin strategy. It also excluded the optional proposal add-ons: ten additional interviews, a deep review of one deployment and six months of monitoring.

## How we reached the recommendation

### We tested the buyer problem before the technology

We began with a broad list of possible AI opportunities. A use case remained in the study only when it had a plausible buyer, a problem worth solving, a reason to use blockchain and a practical route to market.

The scoring method gave the greatest weight to market demand and Cardano fit. It also considered the need for blockchain, the strength of the evidence, access to buyers, differentiation and feasibility. Scores helped compare use cases. They did not override weak evidence or a serious buyer objection.

### Evidence reviewed

| Evidence component | Count | How it is used publicly |
|---|---:|---|
| Public and technical sources | 75 | Named in the source register |
| Controlled claims | 38 | The claims and controls are described; exact attribution remains private |
| Comparison cases | 8 | Named in the public review record |
| Cardano or Cardano-adjacent cases | 12 | Assessed in the final matrices |
| Use cases | 12 | Scores, decisions and conditions are published |
| Field records | 33 | Reported by anonymous stakeholder group |

The comparison cases included Masumi and Sokosumi, x402 on Solana and Base, MPP and Tempo, major agent commerce protocols, Visa and Mastercard initiatives, Ethereum agent standards, specialist AI networks and identity or evidence standards.

The Cardano review covered Masumi, Sokosumi, Cardano x402, Iagon, SingularityNET, NuNet, Rejuve.AI, Veridian, Midnight, Hydra, notary applications and other AI applications with limited public adoption evidence.

### Interviews and professional discussions

| Reference | Stakeholder group | Records | Public use |
|---|---|---:|---|
| FE01 | Institutional buyers and adopters | 5 | Findings are combined at group level |
| FE02 | AI agent builders and platforms | 6 | Findings are combined at group level |
| FE03 | Payment and commerce infrastructure | 6 | Findings are combined at group level |
| FE04 | Cardano ecosystem and operators | 5 | Findings are combined at group level |
| FE05 | Non-Cardano infrastructure and comparison cases | 5 | Findings are combined at group level |
| FE06 | Standards, identity, security and assurance | 6 | Findings are combined at group level |
| Total | Six stakeholder groups | 33 | No names or organisation-to-response mapping are published |

The fieldwork includes structured calls, expert discussions, conference conversations and professional outreach. We used it to understand objections, operating needs and buying criteria. The sample was selected for relevance, so it cannot tell us how common an opinion is across the whole market.

### Evidence controls

We kept documented facts, interview evidence, our analysis and vendor claims separate. We did not treat a vendor's own claim as independent proof. We also separated activity from adoption. A transaction count can show that a system is active, but it cannot show how many paying customers use it or whether they are satisfied.

We protected respondent confidentiality. Names, raw notes, links between organisations and responses, and commercially sensitive information remain in the controlled research record for at least 12 months.

AI tools helped organise sources, compare cases and check consistency. They were not used as evidence and did not decide scores or recommendations. IEI/TKNFRA remains responsible for the report.

## Main findings

### AI agent payments are real but Cardano only fits some transactions

AI agents can now initiate payments and buy digital services through production systems. x402, Stripe, Base, Solana, Tempo, Visa, Mastercard, Google and OpenAI have all developed payment or commerce tools for agents. This is a real market rather than a purely speculative idea. [S03-S15, S40-S45, S52, S71, S78]

That does not mean every agent transaction needs a public blockchain. Banks, card networks, payment platforms and private authorization systems already handle identity, fraud, refunds and liability in many closed business or consumer settings.

Blockchain becomes more relevant when several independent organisations need funds released under agreed rules or need a shared record that one party cannot change alone. Cardano should focus on these situations and compare itself directly with ordinary escrow, signed records and established payment channels. [S12-S24, FE01-FE03, FE06]

**What this means for the committee:** Support narrowly defined business problems. Avoid a general claim that AI agents need blockchain.

**Confidence:** High.

### Masumi and Sokosumi prove that the system works but not that the market is proven

Masumi provides agent registration, payment held under agreed conditions, refunds and service records on Cardano. Sokosumi packages this infrastructure into priced services and a working task process. Together, they are the clearest Cardano example found in the study. [S28-S31, S50, S53-S60, S68-S77]

The final evidence refresh found:

- 1,852 Masumi on-chain transactions in the 30 days covered by the Cardano profile snapshot of 21 October 2026 [S74];
- more than 40,000 cumulative on-chain transactions reported by Masumi [S76]; and
- 4,229 tasks displayed on the Sokosumi Serviceplan page on 29 October 2026, with profile data labelled 27 September 2026 [S77].

These figures measure different things over different periods. They may include tests, retries, internal activity or repeated use by a small number of people. Public sources do not separate paying customers, free tasks, completed work, refunds, disputes or repeat purchases.

**What this means for the committee:** Treat Masumi and Sokosumi as a working starting point. Require evidence about customers and outcomes before funding expansion.

**Confidence:** High that the capability works. Medium-low that it has broad commercial adoption.

### Distribution is Cardano's biggest weakness

The leading agent payment protocols work across different networks. Their advantage comes from easy access through software tools, wallets, stablecoins and platforms that developers already use. Base, Solana, Tempo and card networks have stronger existing routes to users. [S05-S15, S40-S45, S52, S71, S78]

Builders told us that ease of integration often matters more than a richer feature set. Buyers focus on refunds, reconciliation, responsibility and support. They rarely choose a service because of the design of its underlying blockchain. [FE02, FE03, FE05]

Cardano has a coherent escrow and refund system, but it does not yet have the same distribution. Creating a separate Cardano standard would make adoption harder. The practical route is to connect Cardano settlement to the standards and payment services that the market already uses.

**What this means for the committee:** Test the real integration effort with an external developer before funding a product build.

**Confidence:** High.

### The best use case protects the purchase of an AI service

The strongest use case is a machine-delivered service where the buyer risks paying for work that is late, incomplete or unacceptable. The provider also needs confidence that payment will arrive after delivery. A smart contract can hold the funds, record whether the parties accepted the result, and support a refund or dispute process. [S29, S44-S45, S50, FE02-FE04]

This protection is unnecessary for every small payment. A subscription, prepaid credit or simple payment may work better for low-value services with little delivery risk. The extra protection only makes commercial sense when it solves a meaningful problem for the buyer or provider.

Identity and receipts can support this service. Identity should show which person or organisation stands behind the agent and how authority can be withdrawn. The receipt should contain only the references needed to understand a later audit or dispute.

**What this means for the committee:** Start with one specific service, delivery condition and refund problem. Keep identity and receipts inside that business process rather than treating them as separate products.

**Confidence:** Medium-high.

### Formal verification helps with specific controls

Cardano can provide predictable execution for a clearly specified smart contract. Formal verification can increase confidence that a contract or state change follows its written rules. [S33-S35, S51]

It cannot prove that an AI agent understood its instructions, chose the right action or produced a correct result outside the blockchain. Interviews placed greater value on spending limits, clear approvals, the ability to revoke authority and records that a human can understand. [FE01, FE06]

**What this means for the committee:** Name the exact contract and property being checked. Do not claim that Cardano makes AI safe or verified.

**Confidence:** High.

### Public records should contain as little sensitive information as possible

A blockchain can show that a record existed, when events happened and whether a payment reached a stated status. It cannot prove that off-chain information is true or that a service was good. Full prompts, personal information, confidential decisions and proprietary outputs should stay off a public chain. [S16-S24, S36-S37, S72, FE01, FE06]

Signed private records, verifiable credentials and established transparency systems may solve the problem without a blockchain. A Cardano receipt therefore needs to show a clear extra benefit. Midnight may offer a related privacy route, but it is a separate network and should not be described as a feature of Cardano L1.

**What this means for the committee:** Ask risk and audit owners to review a minimal receipt design. Pass the wider privacy questions to the relevant privacy workstream.

**Confidence:** High.

### Cardano should connect to open standards

Existing standards already cover agent communication, tool access, payments, identity and authorization. Cardano does not need to replace them. It needs to show that its settlement or record-keeping function can connect to them reliably. [S03-S18, S44-S45, S71-S72, S78]

A credible implementation should publish the information an external developer needs: interfaces, accepted inputs, what happens when something fails, and evidence that the integration works.

**What this means for the committee:** Make compatibility with open standards a condition of any next engagement.

**Confidence:** High.

### A broad Cardano AI strategy is not supported

Specialist networks already serve AI computing, models and agent marketplaces. Other ecosystems and established commerce networks have stronger positions in payments and checkout. Outside Masumi and Sokosumi, most Cardano examples show technical capability or a historical association rather than clear adoption. [S38-S48, S61-S66, FE03, FE05]

The evidence does not justify direct investment in a Cardano compute market, model market, general AI application platform or mainstream consumer checkout system. These areas should remain outside this strategy unless a buyer identifies a specific need that Cardano uniquely meets.

**What this means for the committee:** Keep investment focused on the narrow service payment and evidence problem.

**Confidence:** High.

## What we learned from the interviews

| Business need | What respondents said | Practical Cardano role | Evidence |
|---|---|---|---|
| Knowing who is responsible | A buyer needs to know which person or organisation stands behind an agent and how its authority can be withdrawn | Link to open identity credentials rather than create a new Cardano identity system | FE01-FE03, FE06 |
| Controlling what an agent can spend | Organisations need clear limits on tasks and spending | Enforce a narrow payment rule while remaining compatible with external authorization systems | FE01-FE03, FE06 |
| Making and reversing payments | Basic automated payment is becoming common; refunds and responsibility remain harder | Add escrow, refund status and a record that people can interpret | FE02-FE03 |
| Handling disputes | A log only helps when the parties agree how to use it | Record the minimum shared events and keep sensitive evidence off-chain | FE01, FE03, FE06 |
| Reaching users | Builders prefer tools that work with their existing software, wallets and providers | Offer Cardano as one option inside open protocols | FE02-FE05 |
| Protecting data | Local AI and control over data matter, but do not automatically require blockchain | Treat privacy as a design requirement and prove the payment role separately | FE01, FE05-FE06 |
| Checking critical rules | Formal verification is useful for precise contracts and state changes | Apply it to a named mandate or escrow contract, not to AI behaviour in general | FE01, FE06 |

## Priority use cases

The scoring placed escrowed purchase of an AI service first at 3.65. Conditional payment for API or data access ranked second at 3.55. A minimal record of an agent action and payment ranked third at 3.50.

All three remain conditional because buyer demand and outcome evidence are still too weak. Compute and model markets scored poorly for Cardano even though those markets may grow elsewhere.

| Priority | Use case | Why it may matter | What must be proven |
|---:|---|---|---|
| 1 | Escrowed purchase of a machine-delivered service | Protects buyers and providers when delivery can fail or be disputed | Independent buyers choose it over simple payment or ordinary escrow |
| 2 | Conditional API or data payment | Adds refund or delivery protection to higher-value digital services | A buyer accepts the added process and integration effort |
| 3 | Minimal action and payment receipt | Gives independent organisations a shared record for a later check or dispute | Risk or audit owners accept the receipt and its privacy design |

## Competitive position in plain language

| Market layer | Cardano's current position | Why | Recommended approach |
|---|---|---|---|
| Agent communication and tool access | No reason to compete | Open protocols already solve this problem | Support connections to those protocols |
| Authorization and delegated authority | Supporting role | Decisions usually happen outside the blockchain; Cardano can enforce a limited payment rule | Define the inputs Cardano accepts and the receipt it returns |
| Basic machine payments | Behind on distribution | Other services reach more wallets, developers and platforms | Connect to existing payment systems and focus on transactions with delivery risk |
| Payment held until service delivery | Possible advantage | Masumi already combines escrow and refunds | Prove that external buyers value the protection |
| Agent identity and reputation | Supporting feature | Established identity standards have wider reach | Link open credentials to service history |
| Audit and dispute records | Possible advantage | A shared record may help organisations that do not fully trust one another | Test with risk owners and compare private alternatives |
| Consumer checkout | No broad case | Existing merchant and card systems already handle checkout, fraud and refunds | Consider only a specific unmet digital service problem |
| AI computing and model markets | No case today | Specialist networks have stronger supply, incentives and developer communities | Do not invest without a specific Cardano buyer requirement |
| Private AI transactions | Pass to another workstream | Privacy is not a native Cardano L1 feature and the connection to Midnight remains unproven | Coordinate with the privacy workstream |

## Claims Cardano can make

Two claims remain credible if they are stated carefully:

- Cardano can support payment held under agreed conditions for some machine-delivered services.
- Cardano may provide a shared, minimal record for organisations that need to review an agent payment or service outcome later.

Two claims should be retired:

- Cardano's formal methods make AI safe or verify the quality of AI results.
- Cardano leads machine payments or should be presented as the chain for AI.

## Answers to the twelve decision questions

| Question | Answer | Confidence | Decision for CPC |
|---|---|---|---|
| Is there a real commercial opportunity? | Yes, but only in selected services where independent parties need payment held under conditions or a shared record | High | Focus on narrow business workflows |
| Does Cardano fit the buyer need? | It can support clear payment rules and a minimal receipt, but buyers must value the result | Medium-high | Link every technical claim to a buyer outcome |
| Is there current Cardano activity? | Masumi and Sokosumi are active, but public figures do not prove broad paid adoption | High for capability; medium-low for adoption | Require better information about customers and outcomes |
| Which use cases rank highest? | Escrowed services, conditional API payments and minimal receipts | Medium-high | Test these first and keep identity as a supporting feature |
| Can the relevant buyers be reached? | Service providers, AI platforms, payment firms and selected risk owners are reachable | Medium | Convert access into written buyer validation |
| Can Cardano compete? | Only through a focused service protection and evidence role | High | Work with open standards and avoid crowded infrastructure markets |
| What would justify further investment? | Paying buyers, repeat use, more than one provider, workable integration and a clear Cardano benefit | High | Use these as funding conditions |
| Which message is credible? | Cardano can help protect selected AI service payments | High | Use precise claims and retire the broad AI story |
| Which partners are needed? | Service providers, a wallet or payment facilitator, a stablecoin route, buyers and an identity or authorization provider | Medium-high | Confirm responsibilities and incentives before a pilot |
| What value returns to Cardano? | Possible transaction, stablecoin and developer activity, plus a useful reference case | Medium-low | Measure only activity caused by the Cardano function |
| Go or no-go? | Conditional go for service payment protection and minimal evidence; no-go for general AI, compute and model markets | Medium-high | Advance only through the three evidence tests |
| What belongs in other RFPs? | Privacy, stablecoins, identity, interoperability, delivery partners and wider customer segmentation | High | Use the handoff memo and keep the current scope closed |

## Recommended next work

### 1 Buyer backed service design

Define one paid AI service where non-delivery, refund or dispute risk matters. Two independent providers and at least three external buyers should agree on the service, delivery condition and acceptance test.

**Proceed when:** at least one buyer commits in writing and explains why payment held under conditions is preferable to a simple payment or ordinary escrow.

**Stop when:** buyers prefer a simpler alternative or will not accept the extra integration.

### 2 External integration test

Ask a developer outside the Cardano ecosystem to connect the service to an existing agent framework, wallet, payment service and stablecoin route. Measure the work required and document how the system handles failures.

**Proceed when:** the external developer completes the connection with acceptable effort and the buyer still values the Cardano function.

**Stop when:** Cardano adds material complexity without improving the buyer's outcome.

### 3 Minimal receipt review

Ask two independent risk or audit owners to review a privacy-aware receipt. The receipt should contain only the information needed for a named audit, counterparty or dispute decision.

**Proceed when:** the reviewers accept the receipt for a real decision and explain why a private signed record would be insufficient.

**Stop when:** existing private logs or credentials solve the problem at lower cost.

The committee should not fund implementation until at least one use case has written buyer commitment and the integration test succeeds. A broad marketing campaign should wait for repeat paid use.

## Limits of the evidence

The interview sample was selected for relevance and includes different types of conversations. Only five records came from institutional buyers. Public activity data is dynamic and often reported by providers themselves. It does not show standard commercial measures such as paying customers, repeat purchases, revenue, refunds or accepted outcomes.

The study did not include a deep technical audit, a paid market database or six months of monitoring. It cannot support revenue forecasts, market-share estimates or a claim of proven product-market fit. It supports a strategic decision and a practical plan for gathering the missing evidence.

Formal verification only applies to a clearly specified contract or system property. It does not prove AI behaviour. Cardano-adjacent projects may also operate without depending on Cardano L1.

## Supporting records

The [final matrices](./milestone-4-final-matrices) contain the detailed scoring, audience, competitive, activity and decision tables. The [source register](./milestone-4-source-register) names all 75 public and technical sources. The controlled claim ledger and respondent records remain available to approved reviewers under the agreed confidentiality rules.

## Final conclusion

Cardano has a credible but limited opportunity in AI agent commerce. It may help when a buyer wants payment held until an AI service meets agreed conditions and when independent organisations need a simple shared record of the transaction.

Masumi and Sokosumi show that this can work technically. They do not yet prove sustained demand from independent paying customers. Cardano also starts with a weaker route to market than larger payment and developer ecosystems.

The next step is therefore a small evidence-building programme, not a full product build. The committee should proceed only if buyers commit, an external developer can integrate the service without excessive effort, and the Cardano record changes a real business decision. If those tests fail, the committee should move the idea to monitor or no-go.

Licensed under CC BY 4.0. Final evidence cut: 29 October 2026.
