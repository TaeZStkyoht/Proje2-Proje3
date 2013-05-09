#version 120

// vertex shaderindan gelen veriler
varying float alfa;

// fragment shader main metodu
void main(void)
{
    // gl_FragColor ekrana basilacak rengi secer
	gl_FragColor = vec4(normalize(mix(vec3(1,0,0.1), vec3(0.1,0,1), cos(alfa))), 1.0);
}
