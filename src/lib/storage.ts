import { put } from '@vercel/blob';

export async function saveFile(file: File, subDir: string = ''): Promise<string> {
    const filename = `${subDir ? subDir + '/' : ''}${Date.now()}-${file.name.replaceAll(' ', '_')}`;
    const blob = await put(filename, file, {
        access: 'public',
    });

    return blob.url;
}
