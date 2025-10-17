
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create test user (required for testing)
  const hashedPassword = await bcrypt.hash('johndoe123', 10)
  const testUser = await prisma.user.upsert({
    where: { email: 'john@doe.com' },
    update: {},
    create: {
      email: 'john@doe.com',
      name: 'John Doe',
      password: hashedPassword,
    },
  })
  console.log('✅ Test user created:', testUser.email)

  // Create AI Basics Tutorial
  const tutorial = await prisma.tutorial.upsert({
    where: { slug: 'ai-basics-workshop' },
    update: {},
    create: {
      title: 'AI Basics Workshop',
      description: 'Master the fundamentals of AI for small business in just one hour. Learn practical prompts, build your first automation, and gain the confidence to leverage AI tools effectively.',
      price: 9900, // $99.00 in cents
      slug: 'ai-basics-workshop',
      isActive: true,
    },
  })
  console.log('✅ Tutorial created:', tutorial.title)

  // Create tutorial modules
  const modules = [
    {
      title: 'Welcome & Getting Started',
      description: 'An introduction to the course and what you\'ll learn',
      content: `# Welcome to AI Basics Workshop

Welcome! You're about to learn how AI can save you hours every week.

## What You'll Learn

- How to write AI prompts that actually work
- Building your first automation
- Practical tools you can use today
- How to stay sane while adopting AI

## Course Structure

This workshop is broken into 6 modules. Each builds on the last, but you can revisit any module anytime.

## Time Commitment

The full workshop takes about 60-90 minutes to complete. But you don't have to do it all at once.

---

**Ready?** Let's dive into Module 1.`,
      order: 1,
      slug: 'welcome-getting-started',
    },
    {
      title: 'Module 1: Understanding AI for Business',
      description: 'Learn what AI can (and can\'t) do for your business',
      content: `# Module 1: Understanding AI for Business

## What AI Actually Is

AI isn't magic. It's pattern recognition at scale.

Think of it like having an extremely well-read assistant who:
- Has read everything on the internet
- Never gets tired
- Can process information incredibly fast
- But sometimes makes confident mistakes

## What AI Is Good At

✅ **Writing and editing** - Emails, blog posts, social media  
✅ **Research and summarizing** - Turning long documents into bullet points  
✅ **Repetitive tasks** - Data entry, formatting, scheduling  
✅ **Brainstorming** - Generating ideas and options  
✅ **Customer support** - Answering common questions

## What AI Struggles With

❌ Truly original creative work  
❌ Complex reasoning across multiple steps  
❌ Understanding context and nuance (sometimes)  
❌ Knowing what it doesn't know  

## The Small Business Advantage

Big companies are slow to adopt AI because of:
- Compliance issues
- Integration challenges
- Corporate bureaucracy

**You can move faster.** That's your edge.

---

**Next:** Module 2 - Writing Prompts That Work`,
      order: 2,
      slug: 'understanding-ai-for-business',
    },
    {
      title: 'Module 2: Writing Prompts That Work',
      description: 'The art and science of getting AI to do what you want',
      content: `# Module 2: Writing Prompts That Work

## The Prompt Formula

Good prompts have three parts:

1. **Context** - Who you are, what you're trying to do
2. **Task** - What you want the AI to do
3. **Format** - How you want the output

### Example: Bad Prompt
"Write a blog post about AI"

### Example: Good Prompt
"I run a small bakery in Portland. Write a 300-word blog post explaining how we use AI to manage inventory and reduce waste. Make it conversational and authentic, not corporate. Include a specific example."

## The Power of Specificity

The more specific you are, the better the output.

### Template You Can Use
"I'm a [your role] who needs to [your goal]. Write a [format] that [specific requirement]. The tone should be [tone description]."

## Common Mistakes

1. **Being too vague** - "Make this better" → Better how?
2. **No constraints** - Without limits, AI will ramble
3. **Wrong tone** - Specify the voice you want
4. **Not iterating** - Your first prompt rarely works perfectly

## Prompt Library

Here are 5 prompts you can use today:

### 1. Email Response
"I received this email: [paste email]. Write a friendly but professional response that [your goal]. Keep it under 100 words."

### 2. Social Media Post
"Turn this information into a LinkedIn post: [paste info]. Make it engaging, not salesy. Add a hook in the first line."

### 3. Meeting Summary
"Summarize these meeting notes into action items: [paste notes]. List who's responsible for each task."

### 4. Customer FAQ
"A customer asked: [question]. Write a helpful response that [addresses their concern]. Include [specific information]."

### 5. Content Repurposing
"Turn this blog post into 5 social media posts: [paste excerpt]. Each should be self-contained and under 150 characters."

---

**Your Turn:** Try one of these prompts with your own content.

**Next:** Module 3 - Building Your First Automation`,
      order: 3,
      slug: 'writing-prompts-that-work',
    },
    {
      title: 'Module 3: Building Your First Automation',
      description: 'Set up a simple automation that saves you time every day',
      content: `# Module 3: Building Your First Automation

## What We Mean By Automation

You don't need to learn coding. We're talking about:
- Setting up email templates
- Using AI-powered tools
- Creating simple workflows

## Automation #1: Email Triage

**Problem:** You spend 30 minutes every morning sorting emails.

**Solution:** Use AI to categorize and draft responses.

### Tools You Can Use
- **Gmail + Gemini** (built-in, free)
- **Superhuman** ($30/month, powerful)
- **ChatGPT** (paste emails, get summaries)

### The Workflow
1. Open your inbox
2. Select 5-10 emails
3. Ask AI: "Categorize these emails by priority and draft 2-sentence replies for the routine ones"
4. Review and send

**Time saved:** 20 minutes/day = 2 hours/week

## Automation #2: Meeting Summaries

**Problem:** You take notes during meetings but never read them again.

**Solution:** Record meetings (with permission) and auto-generate action items.

### Tools You Can Use
- **Otter.ai** (free tier available)
- **Fireflies.ai** (integrates with Zoom)
- **Notion AI** (if you use Notion)

### The Workflow
1. Record your meeting
2. AI transcribes automatically
3. Review the summary (2 minutes)
4. Export action items to your task manager

**Time saved:** 15 minutes/meeting

## Automation #3: Social Media Repurposing

**Problem:** You write a newsletter but don't have time to post on social media.

**Solution:** One piece of content → Multiple formats.

### The Workflow
1. Write your newsletter/blog post
2. Paste into ChatGPT: "Turn this into 3 LinkedIn posts, 5 tweets, and 2 Instagram captions"
3. Review and schedule using Buffer or Later

**Time saved:** 45 minutes/week

## Your Action Plan

Pick ONE automation to implement this week:
- [ ] Email triage
- [ ] Meeting summaries
- [ ] Content repurposing

Don't try to do everything at once. Master one, then add another.

---

**Next:** Module 4 - Essential AI Tools for Small Business`,
      order: 4,
      slug: 'building-your-first-automation',
    },
    {
      title: 'Module 4: Essential AI Tools',
      description: 'The tools worth paying for (and the free alternatives)',
      content: `# Module 4: Essential AI Tools

## The Core Stack

You don't need 50 tools. Here's what actually matters:

### 1. Writing Assistant
**What it does:** Helps with emails, content, editing

**Options:**
- **ChatGPT** (Free tier: Good enough for most people)
- **Claude** (Free tier: Better for long-form content)
- **Gemini** (Free: Built into Google Workspace)

**Pick one.** Don't subscribe to all three.

### 2. Meeting Assistant
**What it does:** Records, transcribes, summarizes meetings

**Options:**
- **Otter.ai** (Free: 300 minutes/month)
- **Fireflies.ai** (Free: Limited features)

**Our pick:** Start with Otter's free tier.

### 3. Design Assistant
**What it does:** Creates images, graphics, presentations

**Options:**
- **Canva AI** ($15/month: Magic Design, background remover)
- **Midjourney** ($10/month: Best image quality, learning curve)

**Our pick:** Canva AI for most small businesses.

### 4. Automation Platform
**What it does:** Connects your tools together

**Options:**
- **Zapier** (Free: 100 tasks/month)
- **Make** (Free: 1,000 operations/month, more complex)

**Our pick:** Start with Zapier's free tier.

## Free Tools Worth Trying

1. **Grammarly** (Free tier) - Catches typos, suggests improvements
2. **Remove.bg** (Free credits) - Remove image backgrounds
3. **Notion AI** (If you use Notion) - Built-in AI assistant
4. **Perplexity** (Free) - AI-powered research
5. **Gamma** (Free) - AI presentation builder

## What NOT To Buy

❌ "All-in-one AI platforms" that try to do everything  
❌ Tools that don't integrate with what you already use  
❌ Expensive plans with features you'll never use  
❌ Multiple tools that do the same thing  

## The $0 Starter Kit

You can start with AI for free:
- ChatGPT (Free)
- Otter.ai (Free tier)
- Canva (Free tier has AI features)
- Zapier (Free tier)

**Total cost:** $0/month

## The $30 Pro Kit

Want to level up?
- ChatGPT Plus ($20/month)
- Otter.ai Pro ($10/month)

**Total cost:** $30/month

---

**Next:** Module 5 - Common Mistakes & How To Avoid Them`,
      order: 5,
      slug: 'essential-ai-tools',
    },
    {
      title: 'Module 5: Common Mistakes & How To Avoid Them',
      description: 'Learn from others\' mistakes and save yourself time',
      content: `# Module 5: Common Mistakes & How To Avoid Them

## Mistake #1: Trying To Do Everything At Once

**What happens:** You sign up for 10 tools, create accounts, get overwhelmed, give up.

**Fix:** Pick ONE use case. Master it. Then add another.

Start with: "I want AI to help me with [specific task]"

## Mistake #2: Not Reviewing AI Output

**What happens:** AI writes something incorrect or off-brand. You publish it. Embarrassment ensues.

**Fix:** Always review and edit.

AI is a starting point, not a finish line.

### Checklist Before Hitting Send
- [ ] Factually accurate?
- [ ] Sounds like me/my brand?
- [ ] No weird phrasing?
- [ ] Includes specific details (not generic)?

## Mistake #3: Using AI For The Wrong Tasks

**Bad uses of AI:**
- Strategic decisions (AI can't understand your business context)
- Legal advice (seriously, don't)
- Anything that requires empathy and human judgment
- Tasks where accuracy is critical (finance, medical, legal)

**Good uses of AI:**
- First drafts
- Brainstorming
- Summarizing
- Repetitive tasks
- Research starting points

## Mistake #4: Forgetting About Data Privacy

**Don't paste:**
- Customer data
- Financial information
- Passwords or credentials
- Confidential business information

**Why:** Free AI tools use your input to train their models.

**Safe option:** Use privacy-focused tools (ChatGPT Plus, Claude Pro) for sensitive work.

## Mistake #5: Expecting Perfection

AI will:
- Make mistakes
- Misunderstand context
- Generate bland content sometimes
- Require iteration

**That's normal.**

The goal isn't perfection. It's saving time while maintaining quality.

## Mistake #6: Not Saving Good Prompts

When you write a prompt that works well, save it.

**Create a prompt library:**
1. Open a Google Doc or Notion page
2. Title it "AI Prompts That Work"
3. Every time you get a great result, save the prompt
4. Organize by category (Email, Social Media, Research, etc.)

## Mistake #7: Giving Up Too Soon

**Reality check:** The first month is clunky.

You'll:
- Write bad prompts
- Get weird outputs
- Wonder if it's worth it

**Push through.** By week 3-4, it clicks.

## Your Prevention Plan

Before moving forward:
- [ ] I'll start with ONE automation
- [ ] I'll always review AI output before using it
- [ ] I'll keep sensitive data out of AI tools
- [ ] I'll save prompts that work
- [ ] I'll give it 30 days before judging results

---

**Next:** Module 6 - Next Steps & Staying Current`,
      order: 6,
      slug: 'common-mistakes-how-to-avoid',
    },
    {
      title: 'Module 6: Next Steps & Staying Current',
      description: 'How to keep learning without getting overwhelmed',
      content: `# Module 6: Next Steps & Staying Current

## Congratulations!

You've completed the AI Basics Workshop.

You now know:
✅ What AI can (and can't) do  
✅ How to write effective prompts  
✅ How to build practical automations  
✅ Which tools are worth your time  
✅ Common mistakes to avoid  

## Your 30-Day Action Plan

### Week 1: Implementation
- [ ] Choose ONE automation from Module 3
- [ ] Set up the tools you need
- [ ] Use it daily for 7 days

### Week 2: Refinement
- [ ] Identify what's working (and what's not)
- [ ] Adjust your prompts
- [ ] Add to your prompt library

### Week 3: Expansion
- [ ] Add a second automation
- [ ] Look for patterns in your daily work
- [ ] Where else can AI help?

### Week 4: Review
- [ ] Calculate time saved
- [ ] What would you do differently?
- [ ] What's your next automation?

## Staying Current (Without Going Crazy)

AI changes fast. Here's how to stay informed without drowning:

### Follow (Choose 1-2)
- **Matt Wolfe** (YouTube) - Weekly AI news, practical focus
- **AI Breakfast** (Newsletter) - Quick daily updates
- **The Rundown AI** (Newsletter) - 5-minute daily read

### Don't Follow
- Twitter AI discourse (it's 90% hype)
- Every new tool launch (most won't matter)
- Technical AI research (unless that's your thing)

## When To Get Help

Consider our **$95/month support plan** if:
- You implement an automation and it breaks
- Your prompts aren't working and you don't know why
- You want help customizing workflows for your business
- You need monthly check-ins to stay on track

No pressure. But we're here if you need us.

## Resources For Going Deeper

### Free Resources
- **OpenAI Prompt Guide** - Official best practices
- **Anthropic Claude Guide** - Detailed prompting techniques
- **r/ChatGPT** (Reddit) - Community tips and tricks

### Paid Courses (If You Want More)
- Our **$295 AI Audit** - Custom roadmap for your business
- **Wes Kao's Writing Course** - Includes AI writing techniques

## Common Questions

**Q: Should I learn to code?**  
A: Probably not. Focus on prompt engineering and tool selection.

**Q: Will AI replace my job?**  
A: No. But someone who uses AI well might.

**Q: How much time will I save?**  
A: Most people save 3-5 hours/week after the first month. Some save more.

**Q: What if I don't "get it"?**  
A: You will. Give it 30 days of consistent use.

## Final Thoughts

AI won't solve all your problems.

But it will give you back time. Time to:
- Focus on strategy
- Talk to customers
- Build your business
- Take a proper lunch break

**That's the goal.**

Not to replace humans. To free humans from the boring bits.

## Stay In Touch

Questions? Feedback? Just want to share a win?

Email us: mark@small-ai.com

We read every email.

---

**You've completed the workshop. Now go automate something.**

**P.S.** If you found this valuable, we'd love a testimonial. Reply to our welcome email and let us know how it went.`,
      order: 7,
      slug: 'next-steps-staying-current',
    },
  ]

  for (const moduleData of modules) {
    const module = await prisma.tutorialModule.create({
      data: {
        ...moduleData,
        tutorialId: tutorial.id,
      },
    })
    console.log(`✅ Module created: ${module.title}`)
  }

  console.log('✅ Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
