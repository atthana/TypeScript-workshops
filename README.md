# TypeScript-workshops
Learning TS with Framework


### Path in Mac with PDF doc
`/Users/atthana/Desktop/Private_Q/Trainings/19_Typescript_IT_Genius_15Feb25/` but .git is inside `workshops` folder


### In summary of steps to create TS project
1. Create folder for project
2. `npm init -y`                  # Initialize package.json
3. `npm i ts-node-dev -D`         # Install ts-node-dev as dev dependency
4. `tsc --init`                   # Initialize tsconfig.json
5. Add `"start": "ts-node-dev --respawn --transpile-only src/index.ts"` to package.json
6. Config tsconfig.json
7. `npm run start`                # Run the project


### workshops
- workshop_day1: Just a simple project to get started with TS
- workshop_day2: Create TS project.
    1. `npm init -y`             # Initialize package.json in current folder
    2. `npm i ts-node-dev -D`    # Install ts-node-dev as dev dependency (ถ้าไม่ใส่ -D จะเป็น dependency เฉยๆนะ ไม่ใช่ DevDependencies)
    3. Edit in package.json:
        ```
        "main": "src/app.ts",
        "scripts": {
            "start": "ts-node-dev --respawn --transpile-only src/app.ts",
        }
        ```
    4. Create folder `src` + new file `app.ts`
    5. Config tsconfig.json (ถ้าใช้ framework ไม่ต้องทำนะ แต่นี่ทำเองไง จะได้รู้ basic)
        ```
        npx tsc --init      # Initialize tsconfig.json
        ```

        แก้ไข tsconfig.json:
        ```
        // Language and Environment
        "target": "ES2020",

        // Modules
        "module": "commonjs",
        "rootDir": "./src",
        "moduleResolution": "node",

        // JavaScript Support
        "allowJs": true,
        "outDir": "./dist",
        "noEmitOnError": true,

        // Interop Constraints
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,

        // Type Checking
        "skipLibCheck": true,

        "include": ["src/**/*.ts"],
        "exclude": ["node_modules"],

        ```
    6. npm run dev      # Run the project (จะขึ้นตามที่มี data ใน app.ts ล่ะจ้า)
        
- workshop_day7_angular: Create Angular project.
    Path: `Path: /Users/atthana/Desktop/Private_Q/Trainings/19_Typescript_IT_Genius_15Feb25/workshops/workshop_day7_angular/basic-angular-typescript`
    
    1. `ng new basic-angular-typescript`
    2. `cd basic-angular-typescript`
    3. `ng s` or `npm run start`

