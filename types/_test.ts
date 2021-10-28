export interface DB {
  providers: {
    provider: {
      id: string;
      name: string;
    };
  };
  users: {
    userId: {
      basicInfo: {
        firstName: string;
      };
      settings: {
        notfications: boolean;
      };
    };
    total: number;
  };
  posts: {
    userId: [
      {
        liked: [];
        comment: [];
        new: [];
        total: number;
      }
    ];
    popular: {
      liked: [];
      comment: [];
      new: [];
      total: number;
    };
    trending: {
      liked: [];
      comment: [];
      new: [];
      total: number;
    };
    communities: {
      communityId: [
        {
          liked: [];
          comment: [];
          new: [];
          total: number;
        }
      ];
    };
    total: number;
  };
  comments: {
    postId: {
      new: [];
      total: number;
    };
  };
  communities: {
    communityId: {
      basicInfo: {
        name: string;
      };
      settings: {
        public: true;
      };
    };
    popular: [];
    active: [];
    new: [];
    total: number;
  };
}
