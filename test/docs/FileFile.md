# FiberSwaggerExampleApi.FileFile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **String** |  | [optional] 
**deletedAt** | [**DatabaseDeletedAt**](DatabaseDeletedAt.md) |  | [optional] 
**expiresAt** | **Number** | The time at which the file expires and is no longer available in epoch seconds. | [optional] 
**filename** | **String** | A filename for the file, suitable for saving to a filesystem. | [optional] 
**id** | **String** |  | [optional] 
**links** | **String** |  | [optional] 
**livemode** | **Boolean** |  | [optional] 
**metadata** | **Object** |  | [optional] 
**object** | **String** |  | [optional] 
**purpose** | [**FilePurpose**](FilePurpose.md) | The [purpose](https://stripe.com/docs/file-upload#uploading-a-file) of the uploaded file. | [optional] 
**size** | **Number** | The size in bytes of the file object. | [optional] 
**title** | **String** | A user friendly title for the document. | [optional] 
**type** | **String** | The type of the file returned (e.g., &#x60;csv&#x60;, &#x60;pdf&#x60;, &#x60;jpg&#x60;, or &#x60;png&#x60;). | [optional] 
**updatedAt** | **String** |  | [optional] 
**url** | **String** | The URL from which the file can be downloaded using your live secret API key. | [optional] 


