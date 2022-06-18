import { useContext, useRef } from 'react';
import { ImageCropper, HiddenCropper } from 'react-bootstrap-image-cropper';
import { ButtonComponent } from '../../../buttons/button.component';
import { FormComponentContext } from '../../form.component';

export default function CropperComponent(props) {
    const triggerRef = useRef();
	const formContext = useContext(FormComponentContext);

    async function handleCropped(file) {
      	const base64 = await blobToBase64(file);
		
		props.onCropped(base64);
    }

	function blobToBase64(blob) {
		return new Promise((resolve, _) => {
			const reader = new FileReader();
			reader.onloadend = () => resolve(reader.result);
			reader.readAsDataURL(blob);
		});
	}

    return (
      	<div>
        	<ButtonComponent 
				name='fotoPerfil'
				label='Selecionar Imagem'
				color='secondary'
				onClick={(e) => {
					e.preventDefault();
					triggerRef.current.trigger()
				}} />
			<HiddenCropper
				triggerRef={triggerRef}
				onCropped={handleCropped}
				cropOptions={{ aspect: 4 / 3, maxZoom: 10 }}
				outputOptions={{ maxWidth: 400, maxHeight: 300 }}
				previewOptions={{ width: 400, height: 300 }}
        	/>
      	</div>
    );
}