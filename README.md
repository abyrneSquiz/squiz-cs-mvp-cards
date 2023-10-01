# cs MVP

This is a sample show the minimum reaquirements for a Component in the Squiz DXP.
The full help documentation can be found in the [component service developer documentation](https://docs.squiz.net/component-service/latest/index.html)

## Files

[manifest.json](https://docs.squiz.net/component-service/latest/getting-started/file-structure.html#manifest-file) - describes the component to the Squiz DXP conponent service

[main.js](https://docs.squiz.net/component-service/latest/getting-started/file-structure.html#javascript-files) - Template file, this can contain client and server side JS in one

[preview folder](https://docs.squiz.net/component-service/latest/getting-started/file-structure.html#preview-files) - use in the DXP console to show a generic preview of the components function.

[Static folder](https://docs.squiz.net/component-service/latest/getting-started/file-structure.html#static-files) - Al required resources to make the componet work. files can be compiled here but should be web ready.





## Deploy

To deploy a component to the Squiz DXP you will require :
- a DXP console login 
- dxp-next installed

### install dxp cli tools
```
npm i -g @squiz/dxp-cli-next
```

### login to the DXP

```
dxp-next auth login --tenant=___TENENT_ID_HERE___
```

### deploy a component or update

before you deploy:
- Check your folder does not include large or unnessacary files.
- increment the version of the compoent in manifest.json

```
dxp-next cmp deploy ./
```

you can view your preview in the DXP console under component service tab