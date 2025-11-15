// Mock data for Polkadot Reputation System

export interface Contribution {
  id: string;
  type: 'CodeCommit' | 'PullRequest' | 'IssueResolution' | 'CodeReview' | 'Documentation' | 'CommunityHelp';
  title: string;
  description: string;
  proof: string;
  timestamp: number;
  weight: number;
  verified: boolean;
  source: 'GitHub' | 'GitLab' | 'Direct';
  metadata?: {
    repo?: string;
    language?: string;
    lines?: number;
  };
}

export interface ReputationScore {
  overall: number;
  breakdown: {
    CodeCommit: number;
    PullRequest: number;
    IssueResolution: number;
    CodeReview: number;
    Documentation: number;
    CommunityHelp: number;
  };
  rank: number;
  percentile: number;
  lastUpdated: number;
}

export interface UserProfile {
  address: string;
  name: string;
  avatar: string;
  reputation: ReputationScore;
  contributions: Contribution[];
  joinedDate: number;
  verified: boolean;
}

export const mockContributions: Contribution[] = [
  {
    id: '1',
    type: 'PullRequest',
    title: 'Add XCM support for reputation queries',
    description: 'Implemented cross-chain reputation verification using XCM messaging',
    proof: 'polkadot/substrate#12345',
    timestamp: Date.now() - 2 * 24 * 60 * 60 * 1000,
    weight: 9,
    verified: true,
    source: 'GitHub',
    metadata: {
      repo: 'polkadot/substrate',
      language: 'Rust',
      lines: 450
    }
  },
  {
    id: '2',
    type: 'CodeCommit',
    title: 'Optimize reputation calculation algorithm',
    description: 'Improved performance of time-decay calculations by 40%',
    proof: 'paritytech/polkadot#67890',
    timestamp: Date.now() - 5 * 24 * 60 * 60 * 1000,
    weight: 8,
    verified: true,
    source: 'GitHub',
    metadata: {
      repo: 'paritytech/polkadot',
      language: 'Rust',
      lines: 230
    }
  },
  {
    id: '3',
    type: 'Documentation',
    title: 'Write comprehensive guide for pallet integration',
    description: 'Created detailed documentation for developers integrating reputation pallet',
    proof: 'docs/reputation-pallet-guide.md',
    timestamp: Date.now() - 7 * 24 * 60 * 60 * 1000,
    weight: 6,
    verified: true,
    source: 'GitHub',
    metadata: {
      repo: 'polkadot-docs',
      language: 'Markdown'
    }
  },
  {
    id: '4',
    type: 'IssueResolution',
    title: 'Fix critical bug in verification logic',
    description: 'Resolved issue causing false positives in contribution verification',
    proof: 'substrate/issues/54321',
    timestamp: Date.now() - 10 * 24 * 60 * 60 * 1000,
    weight: 7,
    verified: true,
    source: 'GitHub'
  },
  {
    id: '5',
    type: 'CodeReview',
    title: 'Reviewed 15 PRs for governance module',
    description: 'Provided detailed technical reviews for governance-related changes',
    proof: 'polkadot/reviews/batch-5',
    timestamp: Date.now() - 14 * 24 * 60 * 60 * 1000,
    weight: 5,
    verified: false,
    source: 'GitHub'
  },
  {
    id: '6',
    type: 'CommunityHelp',
    title: 'Helped 20+ developers on Stack Exchange',
    description: 'Answered technical questions about Substrate and Polkadot development',
    proof: 'stackoverflow.com/users/polkadot-dev',
    timestamp: Date.now() - 20 * 24 * 60 * 60 * 1000,
    weight: 4,
    verified: false,
    source: 'Direct'
  }
];

export const mockReputationScore: ReputationScore = {
  overall: 847,
  breakdown: {
    CodeCommit: 280,
    PullRequest: 320,
    IssueResolution: 150,
    CodeReview: 45,
    Documentation: 35,
    CommunityHelp: 17
  },
  rank: 12,
  percentile: 96,
  lastUpdated: Date.now()
};

export const mockUserProfile: UserProfile = {
  address: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
  name: 'Alice Developer',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
  reputation: mockReputationScore,
  contributions: mockContributions,
  joinedDate: Date.now() - 180 * 24 * 60 * 60 * 1000,
  verified: true
};

export const mockNetworkStats = {
  totalUsers: 12458,
  verifiedContributions: 89234,
  activeChains: 8,
  totalReputation: 15678234
};
