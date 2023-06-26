import bcrypt from 'bcrypt';
import dbClient from '../src/utils/dbClient.js';

async function seed() {
  const password = await bcrypt.hash('123', 8);

  const testUser = await dbClient.user.create({
    data: {
      email: `xtombrock1989@gmail.com`,
      password,
      profile: {
        create: {
          username: `xtombrock`,
        },
      },
    },
  });

  const testUser2 = await dbClient.user.create({
    data: {
      email: `testuser@example.com`,
      password,
      profile: {
        create: {
          username: `testy`,
        },
      },
    },
  });

  const testUser3 = await dbClient.user.create({
    data: {
      email: `testuser3@example.com`,
      password,
      profile: {
        create: {
          username: `manny`,
        },
      },
    },
  });

  const testUser4 = await dbClient.user.create({
    data: {
      email: `testuser4@example.com`,
      password,
      profile: {
        create: {
          username: `welshy`,
        },
      },
    },
  });

  const testUser5 = await dbClient.user.create({
    data: {
      email: `testuser5@example.com`,
      password,
      profile: {
        create: {
          username: `geolorald`,
        },
      },
    },
  });

  const testUser6 = await dbClient.user.create({
    data: {
      email: `testuser6@example.com`,
      password,
      profile: {
        create: {
          username: `examplenme`,
        },
      },
    },
  });

  const testUser7 = await dbClient.user.create({
    data: {
      email: `testuser7@example.com`,
      password,
      profile: {
        create: {
          username: `trasds`,
        },
      },
    },
  });

  const testUser8 = await dbClient.user.create({
    data: {
      email: `testuser8@example.com`,
      password,
      profile: {
        create: {
          username: `jason1`,
        },
      },
    },
  });

  const testUser9 = await dbClient.user.create({
    data: {
      email: `testuser9@example.com`,
      password,
      profile: {
        create: {
          username: `problemman`,
        },
      },
    },
  });

  const testUser10 = await dbClient.user.create({
    data: {
      email: `testuser10@example.com`,
      password,
      profile: {
        create: {
          username: `revenge1`,
        },
      },
    },
  });

  const testUser11 = await dbClient.user.create({
    data: {
      email: `testuser11@example.com`,
      password,
      profile: {
        create: {
          username: `trever1`,
        },
      },
    },
  });

  const testUser12 = await dbClient.user.create({
    data: {
      email: `testuser12@example.com`,
      password,
      profile: {
        create: {
          username: `outliners`,
        },
      },
    },
  });

  const testUser13 = await dbClient.user.create({
    data: {
      email: `testuser130@example.com`,
      password,
      profile: {
        create: {
          username: `funding55`,
        },
      },
    },
  });

  const testUser14 = await dbClient.user.create({
    data: {
      email: `testuser14@example.com`,
      password,
      profile: {
        create: {
          username: `fouteen`,
        },
      },
    },
  });

  const testUser15 = await dbClient.user.create({
    data: {
      email: `testuser15@example.com`,
      password,
      profile: {
        create: {
          username: `traveller2`,
        },
      },
    },
  });

  const testUser16 = await dbClient.user.create({
    data: {
      email: `testuser16@example.com`,
      password,
      profile: {
        create: {
          username: `crowners`,
        },
      },
    },
  });

  const testUser17 = await dbClient.user.create({
    data: {
      email: `testuser17@example.com`,
      password,
      profile: {
        create: {
          username: `seveteenn5`,
        },
      },
    },
  });

  const testUser18 = await dbClient.user.create({
    data: {
      email: `testuser18@example.com`,
      password,
      profile: {
        create: {
          username: `previous88`,
        },
      },
    },
  });

  const testUser19 = await dbClient.user.create({
    data: {
      email: `testuser19@example.com`,
      password,
      profile: {
        create: {
          username: `tester9`,
        },
      },
    },
  });

  const testUser20 = await dbClient.user.create({
    data: {
      email: `testuser20@example.com`,
      password,
      profile: {
        create: {
          username: `twnty20`,
        },
      },
    },
  });

  const testUser21 = await dbClient.user.create({
    data: {
      email: `testuser21@example.com`,
      password,
      profile: {
        create: {
          username: `twoonetwooonw`,
        },
      },
    },
  });

  const adminUser = await dbClient.user.create({
    data: {
      id: 'admin',
      email: 'admin@admin.com',
      password,
      role: 'ADMIN',
      profile: {
        create: {
          username: `adminCraig`,
        },
      },
    },
  });

  const devUser = await dbClient.user.create({
    data: {
      id: 'tom',
      email: 'dev@dev.com',
      password,
      role: 'DEVELOPER',
      profile: {
        create: {
          username: `deve`,
        },
      },
    },
  });



  // EVENTS
  const eventOne = await dbClient.event.create({
    data: {
      type: 'ERROR',
      topic: 'Test event',
      code: 500,
      content: '500 test content',
    },
  });
  const eventTwo = await dbClient.event.create({
    data: {
      type: 'USER',
      topic: 'Test event',
      code: 200,
      content: '200 test content',
    },
  });
  const eventThree = await dbClient.event.create({
    data: {
      type: 'ADMIN',
      topic: 'Test event',
      code: 201,
      content: '201 test content',
    },
  });
  const eventFour = await dbClient.event.create({
    data: {
      type: 'VISITOR',
      topic: 'Test event',
      code: 201,
      content: '201 test content',
    },
  });
  const eventFive = await dbClient.event.create({
    data: {
      type: 'DEVELOPER',
      topic: 'Test event',
      code: 201,
      content: '201 test content',
    },
  });
}

seed().catch(async (error) => {
  console.error(error);
  await dbClient.$disconnect();
  process.exit(1);
});
