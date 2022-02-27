# This Project is code-splitting test.

## How To Test
1. Using React.lazy and Suspense.
2. If Using lazy, when project is built, the bundle is divided.

### Image
1. When Using code-splitting, build files are divided along React.lazy.
![code-splitting(buildfiles)](https://user-images.githubusercontent.com/76833478/155901718-5a506f15-375e-4e96-b8da-aecf394f789b.png)

2. else, build files is one bundle.js.
![no-code-splitting(build files)](https://user-images.githubusercontent.com/76833478/155901724-c1426bff-9e88-45cb-ba48-3ceed04a8541.png)

#### reference
https://reactjs.org/docs/code-splitting.html
