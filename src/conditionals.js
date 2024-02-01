// 'if' statement
const isDirectory = true

// Implicit boolean check -- preferred shorthand
if (isDirectory) {
  console.log('is directory (implicit)')
}

if (!isDirectory) {
  console.log('is not a directory (implicit)')
}

// Explicit boolean check -- '===' means strict equality
if (isDirectory === true) {
  console.log("is directory (explicit)")
}

if (isDirectory === false) {
  console.log('is not a directory (explicit)')
}

// 'switch' statement
const fs = "NTFS"

switch (fs) {
  case "FAT32":
    console.log("This is an older file system")
    break
  case "NTFS":
    console.log("This is a common file system")
    break
  default:
    console.log("Did not match on a file system")
}

