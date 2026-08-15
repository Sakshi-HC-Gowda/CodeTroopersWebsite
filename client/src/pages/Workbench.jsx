import SEOHead from '../components/SEOHead';
import PageHeader from '../components/PageHeader';
import { FadeIn, HoverCard, StaggerContainer, StaggerItem } from '../components/Animated';
import { workbenchContent } from '../data/staticContent';
import styles from './Workbench.module.css';
import { LuSparkles } from 'react-icons/lu';

export default function Workbench() {
  const wb = workbenchContent;

  return (
    <>
      <SEOHead
        title="Workbench — Build. Collaborate. Ship."
        description="Code Troopers Workbench — practical learning tracks, real-world active projects, peer code reviews, and onboarding roadmap."
        path="/workbench"
      />

      {/* 1. Hero */}
      <PageHeader
        label="Platform"
        title="Workbench"
        subtitle={wb.tagline}
      />

      <section className={styles.overviewSection}>
        <div className="container">
          <FadeIn>
            <div className={styles.overviewCard}>
              <div className={styles.quoteAccent}>
                <LuSparkles className={styles.sparkleIcon} />
                <span className={styles.overviewLabel}>Platform Ecosystem</span>
              </div>
              <p className={styles.overviewText}>
                {wb.overview}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. How it works */}
      <section className="section section-alt">
        <div className="container">
          <FadeIn>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{wb.howItWorks.title}</h2>
              <p className={styles.sectionSubtitle}>{wb.howItWorks.subtitle}</p>
            </div>
          </FadeIn>

          <StaggerContainer className={styles.workflowGrid}>
            {wb.howItWorks.steps.map((s, i) => (
              <StaggerItem key={s.step}>
                <HoverCard className={styles.workflowCard}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNumber}>0{s.step}</span>
                    {i < wb.howItWorks.steps.length - 1 && (
                      <span className={styles.flowArrow}>→</span>
                    )}
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. Learning Tracks */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{wb.learningTracks.title}</h2>
              <p className={styles.sectionSubtitle}>{wb.learningTracks.subtitle}</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid-2">
            {wb.learningTracks.tracks.map(track => (
              <StaggerItem key={track.track}>
                <HoverCard className={styles.trackCard}>
                  <div className={styles.trackHeader}>
                    <span className={styles.trackBadge}>Track</span>
                    <h3>{track.track}</h3>
                  </div>
                  <div className={styles.levels}>
                    {track.levels.map((level, i) => (
                      <div key={i} className={styles.level}>
                        <span className={styles.levelNum}>{i + 1}</span>
                        <span>{level}</span>
                      </div>
                    ))}
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Build with CodeTroopers */}
      <section className="section section-alt">
        <div className="container">
          <FadeIn>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{wb.workingProjects.title}</h2>
              <p className={styles.sectionSubtitle}>{wb.workingProjects.subtitle}</p>
            </div>
          </FadeIn>

          {/* Official Project Teams 1, 2, 3 */}
          <StaggerContainer className={styles.projectsGrid}>
            {wb.workingProjects.teams.map((team) => (
              <StaggerItem key={team.id}>
                <HoverCard className={styles.projectCard}>
                  <div className={styles.projectMeta}>
                    <span className={styles.teamTag}>{team.teamName}</span>
                    <span className={styles.projectBadge}>{team.badge}</span>
                  </div>
                  <h3 className={styles.projectTitle}>{team.title}</h3>
                  <div className={styles.objectiveBlock}>
                    <span className={styles.objectiveLabel}>Objective</span>
                    <p>{team.objective}</p>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Other Member Initiatives */}
          {wb.workingProjects.memberProjects && (
            <div className={styles.initiativesWrapper}>
              <FadeIn>
                <div className={styles.subSectionHeader}>
                  <h3 className={styles.subSectionTitle}>{wb.workingProjects.memberProjects.title}</h3>
                  <p className={styles.subSectionSubtitle}>{wb.workingProjects.memberProjects.subtitle}</p>
                </div>
              </FadeIn>

              <StaggerContainer className={styles.initiativesGrid}>
                {wb.workingProjects.memberProjects.projects.map((proj) => (
                  <StaggerItem key={proj.id}>
                    <HoverCard className={styles.initiativeCard}>
                      <div className={styles.projectMeta}>
                        <span className={styles.initiativeBadge}>{proj.badge}</span>
                      </div>
                      <h4 className={styles.initiativeTitle}>{proj.title}</h4>
                      <div className={styles.objectiveBlock}>
                        <span className={styles.objectiveLabel}>Overview</span>
                        <p>{proj.objective}</p>
                      </div>
                    </HoverCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          )}
        </div>
      </section>

      {/* 5. How to Join */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{wb.howToJoin.title}</h2>
              <p className={styles.sectionSubtitle}>{wb.howToJoin.subtitle}</p>
            </div>
          </FadeIn>

          <StaggerContainer className={styles.joinGrid}>
            {wb.howToJoin.steps.map((j, i) => (
              <StaggerItem key={j.step}>
                <HoverCard className={styles.joinStepCard}>
                  <div className={styles.joinStepHeader}>
                    <span className={styles.joinStepBadge}>Step {j.step}</span>
                    {i < wb.howToJoin.steps.length - 1 && <span className={styles.joinArrow}>→</span>}
                  </div>
                  <h3>{j.title}</h3>
                  <p>{j.desc}</p>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
