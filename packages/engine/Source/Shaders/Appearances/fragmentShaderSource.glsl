in vec3 v_positionEC;
in vec3 v_normalEC;
in vec2 v_st;
void main() {
    vec3 positionToEyeEC = -v_positionEC;
    vec3 normalEC = normalize(v_normalEC);
    #ifdef FACE_FORWARD
    normalEC = faceforward(normalEC, vec3(0., 0., 1.), -normalEC);
    #endif
    czm_materialInput materialInput;
    materialInput.normalEC = normalEC;
    materialInput.positionToEyeEC = positionToEyeEC;
    materialInput.st = v_st;
    czm_material material = czm_getMaterial(materialInput);
    #ifdef FLAT out_FragColor=vec4(material.diffuse+material.emission,material.alpha);
    #else out_FragColor=czm_phong(normalize(positionToEyeEC),material,czm_lightDirectionEC);
    #endif
}
