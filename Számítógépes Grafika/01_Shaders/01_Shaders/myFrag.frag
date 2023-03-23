#version 130

// bemeneti változó - most a vertex shader-ből (vagyis ottani out)
in vec4 vs_out_col;
in vec4 vs_out_pos;

// kimeneti változó - a fragment színe
out vec4 fs_out_col;

uniform float sugar = 1;

vec2 cplx_mul(vec2 u, vec2 v) {
	return vec2(
		u.x * v.x - u.y * v.y,
		u.x * v.y + u.y * v.x
	);
}

void main()
{

	vec2 c = vs_out_pos.xy; 
	vec2 z = c;
	for (int i = 0; i<30; i++) {
		z = cplx_mul(z,z) + c;
	}
	if (length(z) < 2)
		fs_out_col = vs_out_col;
	else discard;
	//				  R, G, B, A
		
	//				  R, G, B, A
	//fs_out_col = vec4(1, 1, 1, 1);
}


// 1. feladat: rajzoljuk ki fehérrel a téglalapot!

// 2. feladat: rajzoljuk ki az origó középpontú, 1 sugarú kört! Mit kell tenni, ha nem a
//    körlapot, hanem csak a körvonalat akarjuk? Eml.: discard eldobja a fragmentet

// 3. feladat: uniform változók - animált kör sugár!

// 4. feladat: komplex számok....
